/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />

declare let self: ServiceWorkerGlobalScope;

import { build, files, version } from "$service-worker";

const CACHE = `cache-${version}`;

const ASSETS = [
	...build, // the app itself
	...files, // everything in `static`
];

self.addEventListener("install", (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

self.addEventListener("activate", (event) => {
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) {
				await caches.delete(key);
			}
		}
	}

	event.waitUntil(deleteOldCaches());
});

self.addEventListener("fetch", (event) => {
	if (event.request.method !== "GET") return;

	async function respond() {
		const url = new URL(event.request.url);

		const cache = await caches.open(CACHE);

		// serving build files
		if (ASSETS.includes(url.pathname)) {
			const cachedResponse = await cache.match(url.pathname);
			if (cachedResponse) {
				return cachedResponse;
			}
		}

		// Network first
		try {
			const response = await fetch(event.request);
			// if we're offline, fetch can return a value that is not a Response
			// instead of throwing - and we can't pass this non-Response to respondWith
			if (!(response instanceof Response)) {
				throw new Error("invalid response from fetch");
			}
			const isNotExtension = url.protocol === "http:";
			// caching the response
			// Skiping add-transaction from caching
			if (
				response.status === 200 &&
				isNotExtension &&
				!url.pathname.includes("/add-transaction")
			) {
				cache.put(event.request, response.clone());
			}
			return response;
		} catch (err) {
			const response = await cache.match(event.request);

			if (response) {
				return response;
			}

			throw err;
		}
	}

	event.respondWith(respond());
});

self.addEventListener("message", (event) => {
	if (event.data && event.data.type === "SKIP_WAITING") {
		self.skipWaiting();
	}
});

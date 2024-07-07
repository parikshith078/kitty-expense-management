import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../login/$types";
import prisma from "$lib/server/prisma";
import { redirect } from "sveltekit-flash-message/server";

import { verify } from "@node-rs/argon2";
import { lucia } from "$lib/server/auth";
export const load: PageServerLoad = async (event) => {
	if (event.locals.user) redirect(302, "/");
};

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get("username");
		const password = formData.get("password");

		if (
			typeof username !== "string" ||
			username.length < 3 ||
			username.length > 31 ||
			!/^[a-z0-9_-]+$/.test(username)
		) {
			return fail(400, {
				message: "Invalid credentials",
			});
		}
		if (
			typeof password !== "string" ||
			password.length < 6 ||
			password.length > 255
		) {
			return fail(400, {
				message: "Invalid credentials",
			});
		}

		const existingUser = await prisma.user.findUnique({
			where: {
				username: username.toLowerCase(),
			},
		});
		if (!existingUser) {
			return fail(400, {
				message: "Invalid credentials",
			});
		}

		const validPassword = await verify(existingUser.passwordHash, password, {
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1,
		});
		if (!validPassword) {
			return fail(400, {
				message: "Incorrect username or password",
			});
		}

		const session = await lucia.createSession(existingUser.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: ".",
			...sessionCookie.attributes,
		});

		throw redirect(
			"/",
			{ type: "success", message: "You are now logged in." },
			event,
		);
	},
};

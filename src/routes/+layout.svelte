<script lang="ts">
	import { onMount } from 'svelte'

	// import { DevTools, Visualize } from '$lib/devtools'
	import '../app.css'

	async function detectSWUpdate() {
		const reg = await navigator.serviceWorker.ready

		reg.addEventListener('updatefound', () => {
			const newSW = reg.installing

			newSW?.addEventListener('statechange', () => {
				if (newSW.state === 'installed') {
					if (confirm('New update available! Reload to update?')) {
						newSW.postMessage({ type: 'SKIP_WAITING' })
						window.location.reload()
					}
				}
			})
		})
	}

	onMount(() => {
		detectSWUpdate()
	})
</script>

<!-- <DevTools /> -->

<!-- <Visualize layout='root' > -->
<main class="max-h-screen min-h-screen w-full overflow-y-hidden bg-backgound font-inter text-black">
	<div class="container mx-auto">
		<slot />
	</div>
</main>
<!-- </Visualize> -->

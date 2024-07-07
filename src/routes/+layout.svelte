<script lang="ts">
	import { onMount } from 'svelte'

	// import { DevTools, Visualize } from '$lib/devtools'
	import '../app.css'
	import toast, { Toaster } from 'svelte-french-toast'
    import { getFlash } from 'sveltekit-flash-message';
  import { page } from '$app/stores';

  const flash = getFlash(page);

  $: if ($flash) {
    switch ($flash.type) {
      case"success":
        toast.success($flash.message)
    }
  }

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
<main class=" min-h-screen w-full bg-backgound font-inter text-black">
	<div class="container relative mx-auto">
		<Toaster />
		<slot />
	</div>
</main>
<!-- </Visualize> -->

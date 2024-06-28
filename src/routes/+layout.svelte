<script>
	import { DevTools, Visualize } from '$lib/devtools'
	import '../app.css'
</script>

<DevTools />

<Visualize layout="Root">
	<main class="max-h-screen min-h-screen w-full bg-backgound font-inter text-black">
		<slot />
	</main>
</Visualize>

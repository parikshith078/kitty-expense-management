<script lang="ts">
	import { DevTools, Visualize } from '$lib/devtools'
	import '../app.css'
</script>

<DevTools />

<Visualize layout="Root">
	<main class="max-h-screen min-h-screen w-full bg-backgound font-inter text-black">
		<!-- NOTE: Remove this at the end -->
		<div class="mx-auto mt-10 h-[724px] w-[320px] border border-black">
			<slot />
		</div>
	</main>
</Visualize>

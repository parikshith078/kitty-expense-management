<script lang="ts">
	import TopNavBar from '$lib/components/topNavBar.svelte'
	// import { Visualize } from '$lib/devtools'
	import FloatingActionButton from '$lib/components/floatingActionButton.svelte'
</script>

<!-- <Visualize layout="Dashboard"> -->
<div class="relative flex h-full w-full flex-col">
	<TopNavBar />
	<slot />
	<FloatingActionButton />
</div>
<!-- </Visualize> -->

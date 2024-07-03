<script lang="ts">
	import TopNavBar from '$lib/components/topNavBar.svelte'
	// import { Visualize } from '$lib/devtools'
	import FloatingActionButton from '$lib/components/floatingActionButton.svelte'
	export let data
	$: month = data.payload.month
</script>

<!-- <Visualize layout="Dashboard"> -->
<div class="relative flex h-full w-full flex-col">
	<TopNavBar date={month} />
	<div class="mt-36">
		<slot />
	</div>
	<FloatingActionButton />
</div>
<!-- </Visualize> -->

<script lang="ts">
	import TopNavBar from '$lib/components/topNavBar.svelte'
	import { Visualize } from '$lib/devtools'
</script>

<!-- <Visualize layout="Dashboard"> -->
	<div class="flex h-full w-full flex-col">
		<TopNavBar />
		<slot />
	</div>
<!-- </Visualize> -->

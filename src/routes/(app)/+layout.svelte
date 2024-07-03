<script lang="ts">
	import BottomNavBar from '$lib/components/bottomNavBar.svelte'
	// import { Visualize } from '$lib/devtools'
</script>

<!-- <Visualize layout="App"> -->
<div class="relative mb-16 flex w-full flex-col justify-between">
	<slot />
</div>
<BottomNavBar />
<!-- </Visualize> -->

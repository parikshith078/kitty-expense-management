<script lang="ts">
	import BottomNavBar from '$lib/components/bottomNavBar.svelte'
	import { Visualize } from '$lib/devtools'
</script>

<!-- <Visualize layout="App"> -->
<div class="flex relative h-screen w-full flex-col justify-between">
	<slot />
	<BottomNavBar />
</div>
<!-- </Visualize> -->

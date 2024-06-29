<script lang="ts">
	import BottomNavBar from '$lib/components/bottomNavBar.svelte'
</script>

<div class="flex h-full w-full flex-col justify-between">
	<slot />
	<BottomNavBar />
</div>

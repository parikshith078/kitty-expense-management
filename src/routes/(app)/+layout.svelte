<script lang="ts">
	import BottomNavBar from '$lib/components/bottomNavBar.svelte'
</script>

<div class="flex h-screen w-full flex-col justify-between">
	<slot />
	<BottomNavBar />
</div>

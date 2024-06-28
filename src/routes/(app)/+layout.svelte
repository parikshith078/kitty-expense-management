<script lang="ts">
	import BottomNavBar from '$lib/components/bottomNavBar.svelte'
</script>

<div class="flex w-full flex-col h-full justify-between ">
	<slot />
	<div>
		<BottomNavBar />
	</div>
</div>

<script lang="ts">
	import TopNavBar from '$lib/components/topNavBar.svelte'
</script>

<div class="flex h-full w-full flex-col">
	<TopNavBar />
	<slot />
</div>

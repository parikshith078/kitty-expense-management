<script lang="ts">
	import HomeStats from '$lib/components/homeStats'
	import ListGoup from '$lib/components/listGoup.svelte'
</script>

<div class="h-full space-y-4">
	<HomeStats />
	<div class="mx-auto flex h-[65vh] w-[92%] flex-col gap-4 overflow-auto ">
		<ListGoup />
		<ListGoup />
		<ListGoup />
	</div>
</div>

<script lang="ts">
	import HomeStats from '$lib/components/homeStats'
	import ListGoup from '$lib/components/listGoup.svelte'
</script>

<div class="flex flex-col gap-4">
	<HomeStats />
	<div class="mx-auto gap-4 flex flex-col w-[92%]">
		<ListGoup />
		<!-- <ListGoup /> -->
	</div>
</div>

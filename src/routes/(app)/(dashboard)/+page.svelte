<script lang="ts">
	import HomeStats from '$lib/components/homeStats'
	import ListGoup from '$lib/components/listGoup.svelte'

	export let data
</script>

<div class="h-full space-y-4">
	<HomeStats />
	<div class="mx-auto flex h-full max-h-[75vh] w-[92%] flex-col gap-4 overflow-auto">
		<ListGoup transcationData={data.transactionData} />
	</div>
</div>

<script lang="ts">
	import HomeStats from '$lib/components/homeStats'
	import ListGroup from '$lib/components/listGroup'
	import { getSortDataByday } from '$lib/utils.js'

	export let data

	$: sortedData = getSortDataByday(data.transactionData)
	// Just to get the object in reverse order. such that today is on the top
	$: ordered = Object.keys(sortedData).reverse()
	$: transactionData = data.transactionData
</script>

<div class="h-full space-y-4">
	<HomeStats {transactionData} />
	<div class="mx-auto flex h-full w-[92%] flex-col gap-4">
		<!-- TODO: Add a empty storyset image  -->
		{#if ordered.length === 0}
			<h1 class="py-4 text-center text-xl font-semibold tracking-wide text-primary">
				No transcation found
			</h1>
		{/if}
		{#each ordered as key}
			<ListGroup transcationData={sortedData[parseInt(key)]} />
		{/each}
	</div>
</div>

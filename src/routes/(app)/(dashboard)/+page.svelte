<script lang="ts">
	import HomeStats from '$lib/components/homeStats'
  import ListGroup from '$lib/components/listGroup'
	import { getSortDataByday } from '$lib/utils.js'

	export let data

	const sortedData = getSortDataByday(data.transactionData)
	// Just to get the object in reverse order. such that today is on the top
	const ordered = Object.keys(sortedData).reverse()
</script>

<div class="h-full space-y-4">
	<HomeStats transactionData={data.transactionData} />
	<div class="mx-auto flex h-full max-h-[75vh] w-[92%] flex-col gap-4 overflow-auto">
		{#each ordered as key}
			<ListGroup transcationData={sortedData[parseInt(key)]} />
		{/each}
	</div>
</div>

<script lang="ts">
	import HomeStats from '$lib/components/homeStats'
	import ListGoup from '$lib/components/listGoup.svelte'
	import type { TranscationAndCategory } from '$lib/dbtypes'

	export let data

	type SortedByDayType = {
		[key: number]: TranscationAndCategory[]
	}

	const sortDataByday = () => {
		const transcations = data.transactionData
		const sortedData: SortedByDayType = {}

		transcations.map((item) => {
			if (sortedData[item.createdAt.getDate()] == undefined) {
				sortedData[item.createdAt.getDate()] = []
			}
			sortedData[item.createdAt.getDate()].push(item)
		})
		return sortedData
	}
	const sortedData = sortDataByday()
	// Just to get the object in reverse order. such that today is on the top
	const ordered = Object.keys(sortedData).reverse()
</script>

<div class="h-full space-y-4">
	<HomeStats transactionData={data.transactionData} />
	<div class="mx-auto flex h-full max-h-[75vh] w-[92%] flex-col gap-4 overflow-auto">
		{#each ordered as key}
			<ListGoup transcationData={sortedData[parseInt(key)]} />
		{/each}
	</div>
</div>

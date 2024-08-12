<script lang="ts">
	import type { TranscationAndCategory } from '$lib/dbtypes'
	import DetailsCardItem from './detailsCardItem.svelte'
	import OverviewCard from './overviewCard.svelte'
	import { sortTrascationByCatagory, getSortedKeys } from './utils'

	export let transactionData: TranscationAndCategory[]

	$: sorted = sortTrascationByCatagory(transactionData)
	$: sortedKeys = getSortedKeys(sorted)
</script>

<div class="space-y-5 px-4">
	<section>
		<p
			class="flex justify-between p-2 text-[10px] font-medium uppercase tracking-[1.5px] text-[#424242]"
		>
			Overview
		</p>
		<OverviewCard data={sortedKeys} />
	</section>

	<section>
		<p
			class="flex justify-between p-2 text-[10px] font-medium uppercase tracking-[1.5px] text-[#424242]"
		>
			Details
		</p>
		{#if sortedKeys.length === 0}
			<h1 class="py-4 text-center text-xl font-semibold tracking-wide text-primary">
				No transcation found
			</h1>
		{/if}
		{#each sortedKeys as [category, amountSum, _]}
			<DetailsCardItem transactionCount={sorted[category].length} amount={amountSum} {category} />
		{/each}
	</section>
</div>

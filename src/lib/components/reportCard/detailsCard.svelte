<script lang="ts">
	import type { TranscationAndCategory } from '$lib/dbtypes'
	import DetailsCardItem from './detailsCardItem.svelte'
	import { getTotalAmount, sortTrascationByCatagory } from './utils'

	export let transactionData: TranscationAndCategory[]

	$: sorted = sortTrascationByCatagory(transactionData)
</script>

<div class="px-4 space-y-5">
	<section>
		<p
			class="flex justify-between p-2 text-[10px] font-medium uppercase tracking-[1.5px] text-[#424242]"
		>
			Overview
		</p>
    <div class="w-full rounded-xl h-12 bg-red">

    </div>
	</section>

	<section>
		<p
			class="flex justify-between p-2 text-[10px] font-medium uppercase tracking-[1.5px] text-[#424242]"
		>
			Details
		</p>
		{#each Object.entries(sorted) as [category, data]}
			<DetailsCardItem transactionCount={data.length} amount={getTotalAmount(data)} {category} />
		{/each}
	</section>
</div>

<script lang="ts">
	import type { TranscationAndCategory } from '$lib/dbtypes'
	import { formatDate } from '$lib/utils'
	import ListItem from './listItem.svelte'
	import { getTodaysTotal } from './utils'

	export let transcationData: TranscationAndCategory[]
</script>

<div class="rounded-lg border border-[#E0E0E0] p-2">
	<div class="flex justify-between p-2 text-[10px] font-medium tracking-[1.5px] text-[#424242]">
		<p>{formatDate(transcationData[0].createdAt)}</p>
		<p>{getTodaysTotal(transcationData)}</p>
	</div>
	{#each transcationData as transcation}
		<ListItem
			transcationType={transcation.type}
			amount={transcation.amount}
			category={transcation.catagory.name}
			desc={transcation.desc}
		/>
	{/each}
</div>

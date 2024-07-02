<script lang="ts">
	import type { transcationAndCategory } from '$lib/dbtypes'
	import ListItem from './listItem.svelte'

	export let transcationData: transcationAndCategory[]

	const getTodaysTotal = (data: transcationAndCategory[]) => {
		let income = 0
		let expense = 0

		data.map((item) => {
			if (item.type == 'EXPENSE') {
				expense += item.amount
			} else {
				income += item.amount
			}
		})

		const total = income - expense
		if (total > 0) {
			return '+ ₹' + total
		} else {
			return '- ₹' + Math.abs(total)
		}
	}
</script>

<div class="rounded-lg border border-[#E0E0E0] p-2">
	<div class="flex justify-between p-2 text-[10px] font-medium tracking-[1.5px] text-[#424242]">
		<p>TODAY</p>
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

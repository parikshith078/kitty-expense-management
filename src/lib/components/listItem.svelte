<script lang="ts">
	import { CategoryIcons } from '$lib/categoryTypes'
	import type { CategoryType } from '$lib/categoryTypes'
	export let desc: string
	export let category: CategoryType
	export let amount: number
	export let transcationType: 'expense' | 'income'
</script>

<div class="flex items-center justify-between p-2">
	<div class="flex gap-2">
		<img class="aspect-square h-10" src={CategoryIcons[category]} alt="" />
		<div class="flex flex-col justify-center">
			<h3 class="text-sm">{desc}</h3>
			<p class="text-xs text-[#424242]">{category}</p>
		</div>
	</div>
	<p
		class="text-sm"
		class:text-red={transcationType == 'expense'}
		class:text-green={transcationType == 'income'}
	>
		{transcationType == 'income' ? '+' : '-'} ₹{amount}
	</p>
</div>

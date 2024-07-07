<script lang="ts">
	import { CategoryIcons } from '$lib/categoryTypes'
	import type { CategoryType } from '$lib/categoryTypes'
	import type * as Prisma from '@prisma/client'

	export let transactionCount: number 
	export let category: string
	export let amount: number
	export let transcationType: Prisma.TransactionAndCatagoryType = 'EXPENSE'
	const icon = CategoryIcons[category as any as CategoryType]
</script>

<div class="flex items-center justify-between p-2">
	<div class="flex max-w-[75%] gap-2">
		<img class="aspect-square h-10" src={icon} alt="" />
		<div class="flex flex-col justify-center">
				<p class="line-clamp-1 text-sm">{category}</p>
      <!-- TODO: Add dynamic plural   -->
				<p class="text-xs text-[#424242]">{transactionCount} transactions</p>
		</div>
	</div>
	<p
		class="text-sm"
		class:text-red={transcationType == 'EXPENSE'}
		class:text-green={transcationType == 'INCOME'}
	>
		{transcationType == 'INCOME' ? '+' : '-'} ₹{Math.round(amount).toLocaleString('en-IN')}
	</p>
</div>

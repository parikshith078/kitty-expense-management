<script lang="ts">
	import { CategoryIcons } from '$lib/categoryTypes'
	import type { CategoryType } from '$lib/categoryTypes'
	import type * as Prisma from '@prisma/client'

	export let desc: string | null = null
	export let category: string
	export let amount: number
	export let transcationType: Prisma.TransactionAndCatagoryType
	const icon = CategoryIcons[category as any as CategoryType]
</script>

<div class="flex items-center justify-between p-2">
	<div class="flex max-w-[75%] gap-2">
		<img class="aspect-square h-10" src={icon} alt="" />
		<div class="flex flex-col justify-center">
			{#if desc}
				<p class="line-clamp-1 text-sm">{desc}</p>
				<p class="text-xs text-[#424242]">{category}</p>
			{:else}
				<p class="line-clamp-1 text-sm">{category}</p>
			{/if}
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

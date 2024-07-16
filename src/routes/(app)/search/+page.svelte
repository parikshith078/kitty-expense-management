<script lang="ts">
	import { ListGroupItem } from '$lib/components/listGroup/index.js'
	import { ToggleGroup } from 'bits-ui'
	import { ArrowLeftIcon } from 'lucide-svelte'
	import type { PageServerData } from './$types'
	import { getCatagoryIcon } from '$lib/categoryTypes'
	import { formatDate } from '$lib/utils'
	import { createSearchStore, searchHandler } from '$lib/searchStore'
	import { onDestroy } from 'svelte'

	export let data: PageServerData

	const getUniqueCategories = () => {
		const categoryList: string[] = []
		data.transactions.map((item) => {
			if (!categoryList.includes(item.catagory.name)) {
				categoryList.push(item.catagory.name)
			}
		})

		return categoryList
	}
	let categoryList = getUniqueCategories()
	const transactions = data.transactions.map((item) => ({
		...item,
		searchTerms: `${item.catagory.name} ${item.desc} ${item.amount}`
	}))

	const searchStore = createSearchStore(transactions)
	const unsubscribe = searchStore.subscribe((model) => searchHandler(model))


	onDestroy(() => {
		unsubscribe()
	})
</script>

<section class="fixed container w-full border-b border-b-[#E0E0E0] bg-backgound">
	<div class="flex gap-[14px] p-4">
		<a href="/">
			<ArrowLeftIcon />
		</a>
		<input
			type="text"
			class="w-full outline-none"
			bind:value={$searchStore.search}
			placeholder="Search for notes, categories or labels"
		/>
	</div>
	<ToggleGroup.Root bind:value={$searchStore.selectedCategories} type="multiple" class="ml-14 flex space-x-2 overflow-x-auto py-2">
		{#each categoryList as category}
			<ToggleGroup.Item
				value={category}
				class="inline-flex flex-none items-center data-[state=on]:border-blue data-[state=on]:bg-blue/25 gap-[6px] rounded-lg border border-[#BDBDBD] px-2 py-[6px] font-light text-[#424242]"
			>
				<img src={getCatagoryIcon(category)} class="h-6" alt="" />
				<p>{category}</p>
			</ToggleGroup.Item>
		{/each}
	</ToggleGroup.Root>
</section>

<section class="mt-28 space-y-3 p-4">
	{#each $searchStore.filtered as transaction}
		<div class="rounded-lg border border-[#E0E0E0] p-2">
			<div
				class="flex justify-between p-2 text-[10px] font-medium uppercase tracking-[1.5px] text-[#424242]"
			>
				<p>{formatDate(transaction.createdAt)}</p>
				<p>{transaction.amount}</p>
			</div>
			<ListGroupItem
				category={transaction.catagory.name}
				amount={transaction.amount}
				desc={transaction.desc}
				transcationType={transaction.type}
			/>
		</div>
	{/each}
</section>

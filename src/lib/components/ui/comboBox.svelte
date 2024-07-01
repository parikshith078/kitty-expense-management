<script lang="ts">
	import { getCatagoryIcon } from '$lib/categoryTypes'
	import { Avatar, Combobox } from 'bits-ui'
	import { Check } from 'lucide-svelte'
	import { fly } from 'svelte/transition'
	import type * as Prisma from '@prisma/client'

	export let inputValue: string
	export let catagories: Prisma.Catagory[]

	const compliedCatagories = catagories.map((item) => ({ value: item.name, label: item.name }))

	let touchedInput = false

	$: filteredOptions =
		inputValue && touchedInput
			? compliedCatagories.filter((option) =>
					option.value.toLowerCase().includes(inputValue.toLowerCase())
				)
			: compliedCatagories
</script>

<Combobox.Root items={filteredOptions} bind:inputValue bind:touchedInput>
	<div class="relative">
		<Combobox.Input
			class="peer w-full rounded-md border border-[#9E9E9E] px-4 py-3 outline-blue"
			placeholder="Search a category"
			aria-label="Search a category"
		/>
		<p
			class="absolute left-3 top-[-8px] bg-backgound px-1 text-[12px] text-[#9E9E9E] peer-focus:text-blue"
		>
			Category name
		</p>
	</div>

	<Combobox.Content
		class="bg-background overflow-y-auto py-2 text-[#424242] max-h-[60vh]  shadow outline-none"
		transition={fly}
		sideOffset={8}
	>
		{#each filteredOptions as fruit (fruit.value)}
			<Combobox.Item
				class="flex h-10 w-full select-none items-center py-3 pl-5 pr-1.5 text-sm capitalize outline-none transition-all duration-75 data-[highlighted]:bg-gray data-[highlighted]:text-black"
				value={fruit.value}
				label={fruit.label}
			>
				<Avatar.Root class="mr-2">
					<Avatar.Image src={getCatagoryIcon(fruit.value)} class="h-7" alt="profile" />
					<Avatar.Fallback
						class="flex  aspect-square h-7  items-center justify-center rounded-full bg-gray"
						>C</Avatar.Fallback
					>
				</Avatar.Root>
				{fruit.label}
				<Combobox.ItemIndicator class="ml-auto" asChild={false}>
					<Check />
				</Combobox.ItemIndicator>
			</Combobox.Item>
		{:else}
			<span class="block px-5 py-2 text-sm text-muted-foreground"> No results found </span>
		{/each}
	</Combobox.Content>
	<Combobox.HiddenInput name="favoriteFruit" />
</Combobox.Root>

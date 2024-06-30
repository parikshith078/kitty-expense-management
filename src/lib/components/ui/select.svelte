<script lang="ts">
	import { createSelect, melt } from '@melt-ui/svelte'
	import { ChevronDownIcon } from 'lucide-svelte'
	import { fade } from 'svelte/transition'

	export let options: {lable: string, value: string }[] 
	// TODO: Make default select Expense type
	const {
		elements: { trigger, menu, option },
		states: { selectedLabel, open },
		helpers: { isSelected }
	} = createSelect<string>({
		forceVisible: true,
		positioning: {
			placement: 'bottom',
			fitViewport: true,
			sameWidth: true
		}
	})
</script>

<div class="flex flex-col gap-1">
	<button
		class="flex justify-between rounded-md border border-[#9E9E9E] px-4 py-3"
		use:melt={$trigger}
		aria-label="Food"
	>
		<p>{$selectedLabel || 'Select a type'}</p>
		<ChevronDownIcon />
	</button>
	{#if $open}
		<div
			class="bg-white z-10 flex max-h-[300px]
    flex-col overflow-y-auto p-1
    shadow focus:!ring-0"
			use:melt={$menu}
			transition:fade={{ duration: 150 }}
		>
			{#each options as item}
				<div
					class="relative cursor-pointer px-3 py-2 focus:z-10 data-[highlighted]:bg-gray data-[disabled]:opacity-50"
					use:melt={$option({ ...item })}
					class:bg-gray={$isSelected(item)}
				>
					{item.lable}
				</div>
			{/each}
		</div>
	{/if}
</div>

<script lang="ts">
	import { createSelect, melt } from '@melt-ui/svelte'
	import { fade } from 'svelte/transition'

	const options = {
		sweet: ['Caramel', 'Chocolate', 'Strawberry', 'Cookies & Cream'],
		savory: ['Basil', 'Bacon', 'Rosemary']
	}

	const {
		elements: { trigger, menu, option, label },
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
	<!-- svelte-ignore a11y-label-has-associated-control - $label contains the 'for' attribute -->
	<label class="text-magnum-900 block" use:melt={$label}>Favorite Flavor</label>
	<button
		class="bg-white text-magnum-700 flex h-10 min-w-[220px] items-center justify-between rounded-lg px-3
  py-2 shadow transition-opacity hover:opacity-90"
		use:melt={$trigger}
		aria-label="Food"
	>
		{$selectedLabel || 'Select a flavor'}
	</button>
	{#if $open}
		<div
			class=" bg-white z-10 flex max-h-[300px]
    flex-col overflow-y-auto rounded-lg p-1
    shadow focus:!ring-0"
			use:melt={$menu}
			transition:fade={{ duration: 150 }}
		>
			{#each options.sweet as item}
				<div
					class="text-neutral-800 hover:bg-magnum-100 focus:text-magnum-700 data-[highlighted]:bg-magnum-200 data-[highlighted]:text-magnum-900 relative cursor-pointer
              rounded-lg py-1
              pl-8
              pr-4 focus:z-10
              data-[disabled]:opacity-50"
					use:melt={$option({ value: item, label: item })}
				>
					{item}
				</div>
			{/each}
		</div>
	{/if}
</div>

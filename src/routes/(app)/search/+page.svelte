<script lang="ts">
	import { ListGroupItem } from '$lib/components/listGroup/index.js'
	import { ArrowLeftIcon, HeartPulse } from 'lucide-svelte'

	export let data
</script>

<section class="border-b border-b-[#E0E0E0]">
	<div class="flex gap-[14px] p-4">
		<a href="/">
			<ArrowLeftIcon />
		</a>
		<input
			type="text"
			class="w-full outline-none"
			placeholder="Search for notes, categories or labels"
		/>
	</div>
	<div class="ml-14 flex gap-2 overflow-x-auto py-2">
		{#each [1, 2, 3, 4, 5] as _}
			<div
				class="inline-flex items-center gap-[6px] rounded-lg border border-[#BDBDBD] px-2 py-[6px] font-light text-[#424242]"
			>
				<HeartPulse class="aspect-square h-5" />
				<span>Health</span>
			</div>
		{/each}
	</div>
</section>

<section class="p-4 space-y-3">
	<div class="rounded-lg border border-[#E0E0E0] p-2">
		<div
			class="flex justify-between p-2 text-[10px] font-medium uppercase tracking-[1.5px] text-[#424242]"
		>
			<p>Today</p>
			<p>- 500</p>
		</div>
		<ListGroupItem category="Transportation" amount={500} transcationType="EXPENSE" />
	</div>
</section>

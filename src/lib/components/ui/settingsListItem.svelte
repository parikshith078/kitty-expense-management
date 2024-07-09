<script lang="ts">
	import { ChevronRight, Shapes } from 'lucide-svelte'
	export let href: string
	export let endArrow = true
</script>

<a {href} class="flex items-center justify-between gap-2 py-3">
	<slot name="icon">
		<Shapes class="aspect-square h-6 text-black" />
	</slot>
	<p class="w-full text-sm">
		<slot name="title">Unknow</slot>
	</p>
	{#if endArrow}
		<ChevronRight class="text-[#BDBDBD]" />
	{/if}
</a>

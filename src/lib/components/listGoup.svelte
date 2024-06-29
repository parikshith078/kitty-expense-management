<script lang="ts">
	import ListItem from './listItem.svelte'
</script>

<div class="rounded-lg border border-[#E0E0E0] p-2">
	<div class="flex justify-between p-2 text-[10px] font-medium tracking-[1.5px] text-[#424242]">
		<p>TODAY</p>
		<p>- ₹1125</p>
	</div>
	{#each ['1', '2', '3'] as _}
		<ListItem transcationType="expense" amount={500} category="Donate" desc="Egg & desc" />
	{/each}
</div>

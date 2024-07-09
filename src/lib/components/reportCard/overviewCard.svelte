<script lang="ts">
	export let data: [string, number, string][]

	const getPercentage = (data: [string, number, string][]) => {
		const sum = data.reduce((acc, item) => (acc += item[1]), 0)
		const per = data.map((item) => (item[1] / sum) * 100)
		const themeColors = data.map((item) => item[2])
		return { shares: per, colors: themeColors }
	}
	$: compute = getPercentage(data)
	$: shares = compute.shares
	$: colors = compute.colors
</script>

<div class="flex h-12 w-full gap-0 overflow-hidden rounded-xl bg-gray">
	{#each shares as item, ind}
		<div style={`height: 100%; width: ${item}%; background-color: ${colors[ind]}`}></div>
	{/each}
</div>

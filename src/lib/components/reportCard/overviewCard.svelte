<script lang="ts">
	export let data: [string, number][]

	$: getPercentage = (data: [string, number][]) => {
		const sum = data.reduce((acc, item) => (acc += item[1]), 0)
		const per = data.map((item) => Math.round((item[1] / sum) * 100))
		return per
	}
	$: percetages = getPercentage(data)
	console.log('percetages:', percetages)
	const color = {
		87: 'bg-green',
		6: 'bg-blue',
		1: 'bg-gray'
	}
</script>

<div class="flex h-12 w-full gap-0 overflow-hidden rounded-xl bg-gray">
	{#each percetages as item}
		<div style={`height: 100%; width: ${item}%`} class={`${color[item]}`}></div>
	{/each}
</div>

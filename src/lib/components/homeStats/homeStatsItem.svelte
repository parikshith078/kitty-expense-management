<script lang="ts">
	export let icon: string
	export let textColor: 'red' | 'green' | 'black'
	export let amout: string
</script>

<div class="flex flex-col items-center justify-center">
	<img src={icon} class="pb-[6px]" alt="" />
	<p class={`text-sm  text-${textColor}`}>{amout}</p>
	<p class="text-[12px] text-[#616161]">Expenses</p>
</div>

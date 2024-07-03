<script lang="ts">
	export let icon: string
	export let textColor: 'red' | 'green' | 'black'
	export let amount: string
	export let text: string
</script>

<div class="flex select-none flex-col items-center justify-center">
	<img src={icon} class="pb-[6px]" alt="" />
	<p class={`text-sm  text-${textColor}`}>{amount}</p>
	<p class="text-[12px] text-[#616161]">{text}</p>
</div>

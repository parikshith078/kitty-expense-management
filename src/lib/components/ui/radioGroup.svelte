<script lang="ts">
	import { CheckIcon, CreditCardIcon, PiggyBankIcon } from 'lucide-svelte'
	import { RadioGroup } from 'bits-ui'

	export let transcationType: string
</script>

<RadioGroup.Root
	value={transcationType}
	required
	onValueChange={(val) => {
		transcationType = val
	}}
>
	<div class="flex w-full gap-4 transition">
		<RadioGroup.Item
			id="expense"
			class="inline-flex  w-full items-center  gap-[6px] rounded-md border border-[#BDBDBD] px-2 py-[6px]  transition data-[state=checked]:border-blue data-[state=checked]:bg-blue/25"
			value="EXPENSE"
		>
			{#if transcationType == 'EXPENSE'}
				<CheckIcon class="text-blue" />
			{:else}
				<CreditCardIcon />
			{/if}
			<p>Expense</p>
		</RadioGroup.Item>
		<RadioGroup.Item
			id="income"
			class="inline-flex w-full items-center gap-[6px]  rounded-md border border-[#BDBDBD] px-2 py-[6px]  transition data-[state=checked]:border-blue data-[state=checked]:bg-blue/25"
			value="INCOME"
		>
			{#if transcationType == 'INCOME'}
				<CheckIcon class="text-blue" />
			{:else}
				<PiggyBankIcon />
			{/if}
			<p>Income</p>
		</RadioGroup.Item>
	</div>
</RadioGroup.Root>

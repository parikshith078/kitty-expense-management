<script lang="ts">
	import HomeStatsItem from './homeStatsItem.svelte'
	import expenseIcon from '$lib/assets/home_stats_icons/expenses.svg'
	import balanceIcon from '$lib/assets/home_stats_icons/balance.svg'
	import incomeIcon from '$lib/assets/home_stats_icons/Income.svg'
	import type { TranscationAndCategory } from '$lib/dbtypes'
	import { getStats } from './utils'

	export let transactionData: TranscationAndCategory[]

	$: stats = getStats(transactionData)
</script>

<div class="mx-auto flex w-[92%] justify-between rounded-lg border border-[#E0E0E0] px-6 py-4">
	<HomeStatsItem
		text="Expense"
		icon={expenseIcon}
		textColor={stats.expense.includes('-') ? 'red' : 'black'}
		amount={stats.expense}
	/>
	<HomeStatsItem
		text="Balance"
		icon={balanceIcon}
		textColor={stats.balance.includes('-') ? 'red' : 'green'}
		amount={stats.balance}
	/>
	<HomeStatsItem text="Income" icon={incomeIcon} textColor="black" amount={stats.income} />
</div>

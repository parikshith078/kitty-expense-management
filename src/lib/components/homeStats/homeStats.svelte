<script lang="ts">
	import HomeStatsItem from './homeStatsItem.svelte'
	import expenseIcon from '$lib/assets/home_stats_icons/expenses.svg'
	import balanceIcon from '$lib/assets/home_stats_icons/balance.svg'
	import incomeIcon from '$lib/assets/home_stats_icons/Income.svg'
	import type { TranscationAndCategory } from '$lib/dbtypes'

	export let transactionData: TranscationAndCategory[]

	const getStats = () => {
		let income = 0,
			expense = 0,
			balance = 0
		transactionData.map((fish) => {
			if (fish.type == 'INCOME') {
				income += fish.amount
			} else {
				expense += fish.amount
			}

			balance = income - expense
		})

		return {
			income: `₹${Math.round(income).toLocaleString("en-IN")}`,
			expense: `-₹${Math.round(expense).toLocaleString("en-IN")}`,
			balance: balance > 0 ? `₹${Math.round(balance).toLocaleString("en-IN")}` : `-₹${Math.abs(Math.round(balance)).toLocaleString("en-IN")}`
		}
	}

	const stats = getStats()
</script>

<div class="mx-auto flex w-[92%] justify-between rounded-lg border border-[#E0E0E0] px-6 py-4">
	<HomeStatsItem text="Expense" icon={expenseIcon} textColor="red" amount={stats.expense} />
	<HomeStatsItem
		text="Balance"
		icon={balanceIcon}
		textColor={stats.balance.includes('-') ? 'red' : 'green'}
		amount={stats.balance}
	/>
	<HomeStatsItem text="Income" icon={incomeIcon} textColor="black" amount={stats.income} />
</div>

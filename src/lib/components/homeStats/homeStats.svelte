<script>
	import HomeStatsItem from './homeStatsItem.svelte'
	import expenseIcon from '$lib/assets/home_stats_icons/expenses.svg'
	import balanceIcon from '$lib/assets/home_stats_icons/balance.svg'
	import incomeIcon from '$lib/assets/home_stats_icons/Income.svg'
</script>

<div class="mx-auto flex w-[92%] justify-between rounded-lg border border-[#E0E0E0] px-6 py-4">
	<HomeStatsItem icon={expenseIcon} textColor="red" amout="-₹12,000" />
	<HomeStatsItem icon={balanceIcon} textColor="green" amout="₹46,000" />
	<HomeStatsItem icon={incomeIcon} textColor="black" amout="₹70,000" />
</div>

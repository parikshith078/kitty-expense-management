import type { TranscationAndCategory } from '$lib/dbtypes'

export const getStats = (transactionData: TranscationAndCategory[]) => {
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
		income: `₹${Math.round(income).toLocaleString('en-IN')}`,
		expense: expense === 0 ? '₹0' : `-₹${Math.round(expense).toLocaleString('en-IN')}`,
		balance:
			balance >= 0
				? `₹${Math.round(balance).toLocaleString('en-IN')}`
				: `-₹${Math.abs(Math.round(balance)).toLocaleString('en-IN')}`
	}
}

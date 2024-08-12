import type { TranscationAndCategory } from '$lib/dbtypes'

function getRoundedSignedAmount(amount: number, local: string = 'en-IN') {
	if (amount == 0) {
		return '₹' + amount.toString()
	}
	if (amount > 0) {
		return '+ ₹' + Math.round(amount).toLocaleString(local)
	}
	return '- ₹' + Math.round(Math.abs(amount)).toLocaleString(local)
}

export const getTodaysTotal = (data: TranscationAndCategory[]) => {
	let income = 0
	let expense = 0

	data.map((item) => {
		if (item.type == 'EXPENSE') {
			expense += item.amount
		} else {
			income += item.amount
		}
	})

	const total = income - expense
	return getRoundedSignedAmount(total)
}

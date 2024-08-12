import type { TranscationAndCategory } from '$lib/dbtypes'

export const sortTrascationByCatagory = (data: TranscationAndCategory[]) => {
	const sorted: Record<string, TranscationAndCategory[]> = {}

	// TODO: Deal with income in report
	data = data.filter((val) => val.type === 'EXPENSE')

	data.forEach((val) => {
		const catagory = val.catagory.name
		if (!sorted[catagory]) {
			sorted[catagory] = []
		}
		sorted[catagory].push(val)
	})

	return sorted
}

const getTotalAmount = (data: TranscationAndCategory[]) => {
	let sum = 0
	data.forEach((val) => {
		sum += val.amount
	})
	return sum
}

export const getSortedKeys = (data: Record<string, TranscationAndCategory[]>) => {
	const sumList: [string, number, string][] = []
	for (const key in data) {
		const sum = getTotalAmount(data[key])
		const themeColor = data[key][0].catagory.themeColor
		sumList.push([key, sum, themeColor])
	}
	return sumList.sort((a, b) => b[1] - a[1])
}

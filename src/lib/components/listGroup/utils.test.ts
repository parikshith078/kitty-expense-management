import { describe, expect, test } from 'vitest'
import { getTodaysTotal } from './utils'

const data: any[] = [
	[
		{ type: 'EXPENSE', amount: 100 },
		{ type: 'INCOME', amount: 200 },
		{ type: 'EXPENSE', amount: 50 },
		{ type: 'INCOME', amount: 150 }
	],
	[
		{ type: 'INCOME', amount: 300 },
		{ type: 'INCOME', amount: 200 }
	],
	[
		{ type: 'EXPENSE', amount: 50 },
		{ type: 'EXPENSE', amount: 100 },
		{ type: 'EXPENSE', amount: 75 }
	],
	[]
]

const expectedResult = ['+ ₹200', '+ ₹500', '- ₹225', '₹0']

describe('getTodaysTotal', () => {
	test('should calculate the total correctly when there are both income and expense transactions', () => {
		data.forEach((item, ind) => {
			expect(getTodaysTotal(item)).toEqual(expectedResult[ind])
		})
	})
})

import { describe, expect, test } from 'vitest'
import { getStats } from './utils'

describe('getStats', () => {
	test('should calculate the stats correctly when there are both income and expense transactions', () => {
		const transactionData: any[] = [
			{ type: 'EXPENSE', amount: 100 },
			{ type: 'INCOME', amount: 200 },
			{ type: 'EXPENSE', amount: 50 },
			{ type: 'INCOME', amount: 150 }
		]

		const expectedStats = {
			income: '₹350',
			expense: '-₹150',
			balance: '₹200'
		}

		expect(getStats(transactionData)).toEqual(expectedStats)
	})

	test('should calculate the stats correctly when there are only income transactions', () => {
		const transactionData: any[] = [
			{ type: 'INCOME', amount: 300 },
			{ type: 'INCOME', amount: 200 }
		]

		const expectedStats = {
			income: '₹500',
			expense: '₹0',
			balance: '₹500'
		}

		expect(getStats(transactionData)).toEqual(expectedStats)
	})

	test('should calculate the stats correctly when there are only expense transactions', () => {
		const transactionData: any[] = [
			{ type: 'EXPENSE', amount: 50 },
			{ type: 'EXPENSE', amount: 100 },
			{ type: 'EXPENSE', amount: 75 }
		]

		const expectedStats = {
			income: '₹0',
			expense: '-₹225',
			balance: '-₹225'
		}

		expect(getStats(transactionData)).toEqual(expectedStats)
	})

	test('should calculate the stats correctly when there are no transactions', () => {
		const transactionData: any[] = []

		const expectedStats = {
			income: '₹0',
			expense: '₹0',
			balance: '₹0'
		}

		expect(getStats(transactionData)).toEqual(expectedStats)
	})
})

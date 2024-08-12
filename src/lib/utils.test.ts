import { describe, expect, test } from 'vitest'

import { formatDate, getLastMonthDate, getNextMonthDate, parseMonthYear } from './utils'

const today = new Date()

test('#formatDate', () => {
	expect(formatDate(today)).toBe('Today')
	expect(formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1))).toBe(
		'Yesterday'
	)
})

describe('getLastMonthDate', () => {
	test('should return the last month date', () => {
		const inputDate = new Date(2021, 0, 15)
		const expectedDate = new Date(2020, 11, 15)
		expect(getLastMonthDate(inputDate)).toEqual(expectedDate)
	})

	test('should handle date overflow', () => {
		const inputDate = new Date(2021, 1, 28)
		const expectedDate = new Date(2021, 0, 28)
		expect(getLastMonthDate(inputDate)).toEqual(expectedDate)
	})

	test('should handle leap year', () => {
		const inputDate = new Date(2020, 2, 29)
		const expectedDate = new Date(2020, 1, 29)
		expect(getLastMonthDate(inputDate)).toEqual(expectedDate)
	})
})

describe('getNextMonthDate', () => {
	test('should return the next month date', () => {
		const inputDate = new Date(2021, 0, 15)
		const expectedDate = new Date(2021, 1, 15)
		expect(getNextMonthDate(inputDate)).toEqual(expectedDate)
	})

	test('should handle date overflow', () => {
		const inputDate = new Date(2021, 11, 31)
		const expectedDate = new Date(2022, 0, 31)
		expect(getNextMonthDate(inputDate)).toEqual(expectedDate)
	})

	test('should handle leap year', () => {
		const inputDate = new Date(2020, 1, 29)
		const expectedDate = new Date(2020, 2, 29)
		expect(getNextMonthDate(inputDate)).toEqual(expectedDate)
	})
})

describe('parseMonthYear', () => {
	test('should parse valid date string correctly', () => {
		const dataString = ['Jan_2022', 'Feb_2023', 'Jul_2024']
		const expectedDate = [new Date(2022, 0, 1), new Date(2023, 1, 1), new Date(2024, 6, 1)]
		dataString.forEach((val, ind) => {
			expect(parseMonthYear(val)).toEqual(expectedDate[ind])
		})
	})

	test('should throw an error for missing month or year', () => {
		expect(() => parseMonthYear('Jan')).toThrow('Invalid date string format. Expected "MMM_YYYY".')
		expect(() => parseMonthYear('_2022')).toThrow(
			'Invalid date string format. Expected "MMM_YYYY".'
		)
	})

	test('should throw an error for invalid month abbreviation', () => {
		expect(() => parseMonthYear('Foo_2022')).toThrow('Invalid month abbreviation: Foo')
	})

	test('should throw an error for invalid year', () => {
		expect(() => parseMonthYear('Jan_ABCD')).toThrow('Invalid year: ABCD')
	})
})

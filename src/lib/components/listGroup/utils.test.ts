import { describe, expect, test } from "vitest";
import { getTodaysTotal } from "./utils";

describe('getTodaysTotal', () => {
  test('should calculate the total correctly when there are both income and expense transactions', () => {
    const data: any[] = [
      { type: 'EXPENSE', amount: 100 },
      { type: 'INCOME', amount: 200 },
      { type: 'EXPENSE', amount: 50 },
      { type: 'INCOME', amount: 150 },
    ];
    expect(getTodaysTotal(data)).toBe('+ ₹200');
  });

  test('should calculate the total correctly when there are only income transactions', () => {
    const data: any[] = [
      { type: 'INCOME', amount: 300 },
      { type: 'INCOME', amount: 200 },
    ];
    expect(getTodaysTotal(data)).toBe('+ ₹500');
  });

  test('should calculate the total correctly when there are only expense transactions', () => {
    const data: any[] = [
      { type: 'EXPENSE', amount: 50 },
      { type: 'EXPENSE', amount: 100 },
      { type: 'EXPENSE', amount: 75 },
    ];
    expect(getTodaysTotal(data)).toBe('- ₹225');
  });

  test('should calculate the total correctly when there are no transactions', () => {
    const data: any[] = [];
    expect(getTodaysTotal(data)).toBe('+ ₹0');
  });
});

import type { TranscationAndCategory } from "./dbtypes";

export function formatDate(date: Date): string {
	const now = new Date();
	const dayDifference = now.getDay() - date.getDay();

	let dayLabel: string;
	if (dayDifference === 0) {
		dayLabel = "Today";
	} else if (dayDifference === 1) {
		dayLabel = "Yesterday";
	} else {
		dayLabel = date.toLocaleString("en-us", {
			weekday: "long",
			month: "short",
			day: "numeric",
		});
	}

	return dayLabel;
}

export type SortedByDayType = {
	[key: number]: TranscationAndCategory[];
};

export const getSortDataByday = (data: TranscationAndCategory[]) => {
	const sortedData: SortedByDayType = {};

	data.map((item) => {
		if (sortedData[item.createdAt.getDate()] == undefined) {
			sortedData[item.createdAt.getDate()] = [];
		}
		sortedData[item.createdAt.getDate()].push(item);
	});
	return sortedData;
};

export const getMonthEnds = (date: Date) => {
	const firstDateOfMonth = (date = new Date()) =>
		new Date(date.getFullYear(), date.getMonth(), 1);
	const lastDateOfMonth = (date = new Date()) =>
		new Date(date.getFullYear(), date.getMonth() + 1, 0);

	return { start: firstDateOfMonth(date), end: lastDateOfMonth(date) };
};

export function getLastMonthDate(date: Date): Date {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // Calculate the previous month
  const previousMonth = new Date(year, month - 1, day);

  // If the date overflowed into the following month, set to the last day of the previous month
  if (previousMonth.getMonth() === month - 1 || (month === 0 && previousMonth.getMonth() === 11)) {
    return previousMonth;
  } else {
    return new Date(year, month, 0); // Last day of the previous month
  }
}

export function getNextMonthDate(date: Date): Date {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // Calculate the next month
  const nextMonth = new Date(year, month + 1, day);

  // If the date overflowed into the following month, set to the last day of the next month
  if (nextMonth.getMonth() === month + 1 || (month === 11 && nextMonth.getMonth() === 0)) {
    return nextMonth;
  } else {
    return new Date(year, month + 2, 0); // Last day of the next month
  }
}
/**
 * Converts a date string in the format "MMM_YYYY" (e.g., "Jun_2024") into a Date object
 * representing the first day of that month.
 * 
 * @param {string} dateString - The date string in the format "MMM_YYYY".
 * @returns {Date} - The Date object representing the first day of the specified month.
 * @throws {Error} - Throws an error if the date string format is invalid.
 */
export function parseMonthYear(dateString: string): Date {
  // Map of month abbreviations to their respective month indices (0-based)
  const monthMap: { [key: string]: number } = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
  };

  // Split the date string into the month and year parts
  const [monthStr, yearStr] = dateString.split('_');

  if (!monthStr || !yearStr) {
    throw new Error('Invalid date string format. Expected "MMM_YYYY".');
  }

  // Get the month index from the monthMap
  const month = monthMap[monthStr];
  if (month === undefined) {
    throw new Error(`Invalid month abbreviation: ${monthStr}`);
  }

  // Parse the year part as an integer
  const year = parseInt(yearStr, 10);
  if (isNaN(year)) {
    throw new Error(`Invalid year: ${yearStr}`);
  }

  // Return a Date object representing the first day of the specified month
  return new Date(year, month, 1);
}


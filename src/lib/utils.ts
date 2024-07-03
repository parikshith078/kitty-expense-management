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
export const startOfMonth = new Date(
	new Date().getFullYear(),
	new Date().getMonth(),
	1,
);
export const endOfMonth = new Date(
	new Date().getFullYear(),
	new Date().getMonth() + 1,
	0,
	23,
	59,
	59,
);

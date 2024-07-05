import type { TranscationAndCategory } from "$lib/dbtypes";

export const sortTrascationByCatagory = (data: TranscationAndCategory[]) => {
	const sorted: Record<string, TranscationAndCategory[]> = {};

	// TODO: Deal with income in report
	data = data.filter((val) => val.type === "EXPENSE");

	data.forEach((val) => {
		const catagory = val.catagory.name;
		if (!sorted[catagory]) {
			sorted[catagory] = [];
		}
		sorted[catagory].push(val);
	});

	return sorted;
};

export const getTotalAmount = (data: TranscationAndCategory[]) => {
	let sum = 0;
	data.forEach((val) => {
		sum += val.amount;
	});
  return sum
};

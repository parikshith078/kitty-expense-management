import { redirect } from "@sveltejs/kit";
import prisma from "$lib/server/prisma";
import { getMonthEnds, parseMonthYear } from "$lib/utils";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
	if (!event.locals.user) {
		redirect(301, "/login");
	}
	let monthEnds = getMonthEnds(new Date());
	if (event.params.month) {
		monthEnds = getMonthEnds(parseMonthYear(event.params.month));
	}

	const transactionData = await prisma.transaction.findMany({
		where: {
			userId: event.locals.user?.id,
			createdAt: {
				gte: monthEnds.start,
				lte: monthEnds.end,
			},
		},
		include: {
			catagory: true,
		},
		orderBy: {
			createdAt: "desc",
		},
	});

	return {
		user: event.locals.user,
		transactionData,
    payload: {
      month: monthEnds.start
    }
	};
};

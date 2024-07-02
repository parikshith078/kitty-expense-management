import { redirect } from "@sveltejs/kit";
import prisma from "$lib/server/prisma";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
	if (!event.locals.user) {
		redirect(301, "/login");
	}
	const startOfMonth = new Date(
		new Date().getFullYear(),
		new Date().getMonth(),
		1,
	);
	const endOfMonth = new Date(
		new Date().getFullYear(),
		new Date().getMonth() + 1,
		0,
		23,
		59,
		59,
	);

	const transactionData = await prisma.transaction.findMany({
		where: {
			userId: event.locals.user?.id,
			createdAt: {
				gte: startOfMonth,
				lte: endOfMonth,
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
	};
};

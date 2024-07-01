import { redirect } from "@sveltejs/kit";
import prisma from "$lib/server/prisma";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
	if (!event.locals.user) {
		redirect(301, "/login");
	}
	const transactionData = await prisma.transaction.findMany({
		where: {
			userId: event.locals.user?.id,
		},
		include: {
			catagory: true,
		},
	});

	return {
		user: event.locals.user,
		transactionData,
	};
};

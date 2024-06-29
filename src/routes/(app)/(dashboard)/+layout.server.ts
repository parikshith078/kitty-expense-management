import prisma from "$lib/server/prisma";
import type { LayoutServerLoad } from "../$types";

export const load: LayoutServerLoad = async (event) => {
	const transactionData = await prisma.transaction.findMany({
		where: {
			userId: event.locals.user?.id,
		},
		include: {
			catagory: true,
		},
	});

	return {
		transactionData,
	};
};

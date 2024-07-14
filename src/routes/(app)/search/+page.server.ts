import { redirect } from "sveltekit-flash-message/server";
import type { PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		throw redirect(
			"/login",
			{ type: "error", message: "You need to login" },
			event,
		);
	}

	const userId = event.locals.user.id;

	const transactions = await prisma.transaction.findMany({
		where: {
			userId: userId,
		},
		include: {
			catagory: true,
		},
	});

	return { transactions };
};

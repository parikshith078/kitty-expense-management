import type { PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";

export const load: PageServerLoad = async () => {
	const catagories = await prisma.catagory.findMany();
	return {
		catagories,
	};
};
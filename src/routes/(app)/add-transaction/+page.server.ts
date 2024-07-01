import type { PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";
import type { Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	const catagories = await prisma.catagory.findMany();
	return {
		catagories,
	};
};

export const actions: Actions =  {
  default: async (event) => {
    const formData = await event.request.formData()
    console.log("formData:", formData);
  }
}

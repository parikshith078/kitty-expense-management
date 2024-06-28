import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		redirect(301, "/login");
	}
	return {
		user: event.locals.user,
	};
};

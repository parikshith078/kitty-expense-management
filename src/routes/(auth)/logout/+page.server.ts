import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { lucia } from "$lib/server/auth";
import { redirect } from "sveltekit-flash-message/server";

export const load: PageServerLoad = async (event) => {
	if (!event.locals.session) {
		return fail(401);
	}
	await lucia.invalidateSession(event.locals.session.id);
	const sessionCookie = lucia.createBlankSessionCookie();
	event.cookies.set(sessionCookie.name, sessionCookie.value, {
		path: ".",
		...sessionCookie.attributes,
	});

	throw redirect(
		"/",
		{ type: "success", message: "Logged out successfully." },
		event,
	);
};

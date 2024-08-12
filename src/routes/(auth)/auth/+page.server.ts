import { lucia } from '$lib/server/auth'
import { fail, type Actions } from '@sveltejs/kit'
import { redirect } from 'sveltekit-flash-message/server'

export const actions: Actions = {
	logout: async (event) => {
		if (!event.locals.session) {
			return fail(401)
		}
		await lucia.invalidateSession(event.locals.session.id)
		const sessionCookie = lucia.createBlankSessionCookie()
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		})

		throw redirect('/', { type: 'success', message: 'Logged out successfully.' }, event)
	}
}

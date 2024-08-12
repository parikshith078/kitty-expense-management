import { lucia } from '$lib/server/auth'
import { fail, type Actions } from '@sveltejs/kit'
import { hash } from '@node-rs/argon2'
import { generateIdFromEntropySize } from 'lucia'

import prisma from '$lib/server/prisma'
import type { PageServerLoad } from './$types'
import { redirect } from 'sveltekit-flash-message/server'

export const load: PageServerLoad = async (event) => {
	if (event.locals.user) redirect(302, '/')
}

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData()
		const username = formData.get('username')
		const password = formData.get('password')
		// username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
		// keep in mind some database (e.g. mysql) are case insensitive
		if (
			typeof username !== 'string' ||
			username.length < 3 ||
			username.length > 31 ||
			!/^[a-z0-9_-]+$/.test(username)
		) {
			return fail(400, {
				message: 'Invalid username'
			})
		}
		if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
			return fail(400, {
				message: 'Invalid password'
			})
		}

		const userId = generateIdFromEntropySize(10) // 16 characters long
		const passwordHash = await hash(password, {
			// recommended minimum parameters
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		})

		const userExist = await prisma.user.findUnique({
			where: {
				username: username
			}
		})

		if (userExist) {
			return fail(400, {
				message: 'Username already exists'
			})
		}

		await prisma.user.create({
			data: {
				id: userId,
				username: username,
				passwordHash: passwordHash
			}
		})

		const session = await lucia.createSession(userId, {})
		const sessionCookie = lucia.createSessionCookie(session.id)
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		})

		throw redirect(
			'/',
			{
				type: 'success',
				message: 'Your account has been created successfully'
			},
			event
		)
	}
}

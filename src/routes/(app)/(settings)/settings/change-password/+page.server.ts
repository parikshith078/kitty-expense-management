import { fail, type Actions } from "@sveltejs/kit";
import { hash, verify } from "@node-rs/argon2";

import prisma from "$lib/server/prisma";
import { redirect } from "sveltekit-flash-message/server";

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const password = formData.get("password");
		const currentPassword = formData.get("current-password");
		// username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
		// keep in mind some database (e.g. mysql) are case insensitive
		if (
			typeof password !== "string" ||
			password.length < 6 ||
			password.length > 255
		) {
			return fail(400, {
				message: "Invalid password",
			});
		}

		if (
			typeof currentPassword !== "string" ||
			currentPassword.length < 6 ||
			currentPassword.length > 255
		) {
			return fail(400, {
				message: "Invalid new password",
			});
		}
		const passwordHash = await hash(password, {
			// recommended minimum parameters
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1,
		});

		// check current password match
		const existingUser = await prisma.user.findUnique({
			where: {
				id: event.locals.user?.id,
			},
		});

		const validPassword = await verify(existingUser!.passwordHash, currentPassword, {
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1,
		});

		if (!validPassword) {
			return fail(400, {
				message: "Incorrent current password",
			});
		}

		await prisma.user.update({
			where: {
				id: event.locals.user?.id,
			},
			data: {
				passwordHash: passwordHash,
			},
		});

		throw redirect(
			"/",
			{
				type: "success",
				message: "Your password has been changed successfully",
			},
			event,
		);
	},
};

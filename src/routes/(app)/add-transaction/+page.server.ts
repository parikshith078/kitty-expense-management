import type { PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";
import { fail, redirect, type Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	const catagories = await prisma.catagory.findMany();
	return {
		catagories,
	};
};
// [
//     {
//       name: 'categoryId',
//       value: '6c1e6c93-0164-4abb-a4a0-b5b78883ec10'
//     },
//     { name: 'transcationType', value: 'INCOME' },
//     { name: 'amount', value: '546' },
//     { name: 'desc', value: 'sf sfaf' }
//   ]

export const actions: Actions = {
	default: async (event) => {
		if (!event.locals.user) {
			return fail(400, {
				message: "Unauthrized",
			});
		}
		const formData = await event.request.formData();
		const transcationType = formData.get("transcationType");
		const categoryId = formData.get("categoryId");
		const amount = formData.get("amount");

		// desc is optional
		const desc = formData.get("desc");

		// TODO: do validation with zod

		// if (typeof amount !== "number" || amount > 0) {
		// 	return fail(400, {
		// 		message: "Invalid amount",
		// 	});
		// }

		// TODO: ambiguity with desc being optional
		if (
			categoryId == null ||
			transcationType == null ||
			desc == null ||
			amount == null
		) {
			return fail(400, {
				message: "Invalid input",
			});
		}

		await prisma.transaction
			.create({
				data: {
					amount: parseFloat(amount as string),
					catagoryId: categoryId as string,
					type: transcationType == "EXPENSE" ? "EXPENSE" : "INCOME",
					userId: event.locals.user.id,
					desc: desc as string,
				},
			})
			.then(() => {
				console.log("Created new transaction");
			})
			.catch((err) => {
				console.error("Error while creating transaction: ", err);
			});
	},
};

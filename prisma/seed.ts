import { PrismaClient } from "@prisma/client";
// import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();


async function seedCategoryV2() {
	const data = [
		{
			name: "Cafe",
			type: "EXPENSE",
			theme: "#FFECB3",
		},
		{
			name: "Fuel",
			type: "EXPENSE",
			theme: "#B2EBF2",
		},
		{
			name: "Education",
			type: "EXPENSE",
			theme: "#F0F4C3",
		},
		{
			name: "Donate",
			type: "EXPENSE",
			theme: "#FFF9C4",
		},
		{
			name: "Electronics",
			type: "EXPENSE",
			theme: "#FFCDD3",
		},
	];

	data.map(async (item) => {
		await prisma.catagory.create({
			data: {
				name: item.name,
				themeColor: item.theme,
				type: "EXPENSE",
			},
		});
	});
}

async function main() {
	await seedCategoryV2()
		.then(() => {
			console.log("Created");
		})
		.catch((err) => {
			console.log(err);
		});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

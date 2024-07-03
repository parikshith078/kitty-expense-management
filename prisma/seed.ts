import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function seedCategory() {
	var categoryList = [
		'Cafe',
		'Donate',
		'Education',
		'Electronics',
		'Fuel',
		'Gifts',
		'Groceries',
		'Health',
		'Institute',
		'Laundry',
		'Liquor',
		'Maintenance',
		'Money',
		'Party',
		'Restaurant',
		'Savings',
		'Self_development',
		'Sport',
		'Transportation'
	]
	const seedData: { name: string; type: 'EXPENSE' }[] = []
	categoryList.map((item) => seedData.push({ name: item, type: 'EXPENSE' }))
	console.log('Creatting...')
	try {
		await prisma.catagory.deleteMany()
		await prisma.catagory.createMany({
			data: seedData
		})
		console.log('Completed')
	} catch (err) {
		console.error(err)
	}
}

async function seedTranscation() {
	const cate = ['02015e33-42df-465f-a90d-8a7433123e36', 'b0fd1816-585f-49f0-b576-5aba0120b53d']
	const userId = 'bnrbsrlr3cjjosld'
	let seedData: any = []

	for (let i = 0; i < 5; i++) {
		seedData.push({
			type: 'EXPENSE',
			userId: userId,
			amount: parseFloat(faker.finance.amount({ min: 70, max: 12000 })),
			catagoryId: cate[Math.floor(Math.random() * 2)],
			desc: faker.lorem.words({ max: 12, min: 4 })
		})
	}
	try {
		console.log('createing....')
		await prisma.transaction.createMany({ data: seedData })
		console.log('completed')
	} catch (err) {
		console.error(err)
	}
}

async function main() {
	await seedCategory()
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})

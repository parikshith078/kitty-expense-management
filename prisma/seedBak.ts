import { PrismaClient } from '@prisma/client'
// import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

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

async function main() {
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

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})

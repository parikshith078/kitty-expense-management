import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
import type { CategoryType } from './categoryTypes'

const prisma = new PrismaClient()

type ListTranscationItemType = {
	desc: string
	category: CategoryType
	amount: number
	transcationType: 'expense' | 'income'
}

async function main() {
	// await prisma.note.deleteMany()
	// for (let i = 0; i < 20; i++) {
	// 	const note = await prisma.note.create({
	// 		data: {
	// 			text: faker.lorem.sentences({ min: 1, max: 4 })
	// 		}
	// 	})
	// 	console.log('created note: ', note.id)
	// }
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

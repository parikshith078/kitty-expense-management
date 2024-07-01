
	import type * as Prisma from '@prisma/client'
	type Category = {
		catagory: Prisma.Catagory
	}

export type transcationAndCategory = Prisma.Transaction & Category

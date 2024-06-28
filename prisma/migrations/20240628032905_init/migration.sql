/*
  Warnings:

  - You are about to drop the column `desc` on the `Catagory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Catagory" DROP COLUMN "desc";

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "desc" TEXT;

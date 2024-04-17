/*
  Warnings:

  - You are about to drop the column `contentType` on the `AI` table. All the data in the column will be lost.
  - You are about to drop the column `generativeAI` on the `AI` table. All the data in the column will be lost.
  - You are about to drop the column `layer` on the `AI` table. All the data in the column will be lost.
  - You are about to drop the column `reference` on the `AI` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ContentType` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ecosystem` to the `AI` table without a default value. This is not possible if the table is not empty.
  - Added the required column `freeVersion` to the `AI` table without a default value. This is not possible if the table is not empty.
  - Added the required column `licenseType` to the `AI` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paidVersion` to the `AI` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referenceURL` to the `AI` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toolDescription` to the `AI` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_userId_fkey";

-- AlterTable
ALTER TABLE "AI" DROP COLUMN "contentType",
DROP COLUMN "generativeAI",
DROP COLUMN "layer",
DROP COLUMN "reference",
ADD COLUMN     "ecosystem" TEXT NOT NULL,
ADD COLUMN     "freeVersion" BOOLEAN NOT NULL,
ADD COLUMN     "licenseType" TEXT NOT NULL,
ADD COLUMN     "paidVersion" BOOLEAN NOT NULL,
ADD COLUMN     "referenceURL" TEXT NOT NULL,
ADD COLUMN     "toolDescription" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ContentType" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name";

-- DropTable
DROP TABLE "Admin";

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnterpriseCategory" (
    "enterpriseCategory_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "EnterpriseCategory_pkey" PRIMARY KEY ("enterpriseCategory_id")
);

-- CreateTable
CREATE TABLE "ToolEnterpriseCategory" (
    "tool_id" TEXT NOT NULL,
    "enterpriseCategory_id" TEXT NOT NULL,

    CONSTRAINT "ToolEnterpriseCategory_pkey" PRIMARY KEY ("enterpriseCategory_id")
);

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolEnterpriseCategory" ADD CONSTRAINT "ToolEnterpriseCategory_tool_id_fkey" FOREIGN KEY ("tool_id") REFERENCES "AI"("tool_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolEnterpriseCategory" ADD CONSTRAINT "ToolEnterpriseCategory_enterpriseCategory_id_fkey" FOREIGN KEY ("enterpriseCategory_id") REFERENCES "EnterpriseCategory"("enterpriseCategory_id") ON DELETE RESTRICT ON UPDATE CASCADE;

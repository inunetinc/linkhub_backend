/*
  Warnings:

  - You are about to drop the column `companyName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `industry` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "AnnouncementStatus" AS ENUM ('ACTIVE', 'COMPLETED', 'CANCELLED');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "companyName",
DROP COLUMN "industry",
DROP COLUMN "logo";

-- CreateTable
CREATE TABLE "ContentAnnouncement" (
    "id" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "platforms" "Platform"[],
    "scheduledAt" TIMESTAMP(3) NOT NULL,
    "thumbnail" TEXT,
    "status" "AnnouncementStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContentAnnouncement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ContentAnnouncement" ADD CONSTRAINT "ContentAnnouncement_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

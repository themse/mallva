-- CreateEnum
CREATE TYPE "FeaturedBannerOrder" AS ENUM ('INFO_FIRST', 'BANNER_FIRST');

-- CreateTable
CREATE TABLE "FeaturedBanner" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "order" "FeaturedBannerOrder" NOT NULL,
    "bgColor" TEXT NOT NULL,
    "ctaBtnLabel" TEXT NOT NULL,
    "darkMode" BOOLEAN DEFAULT false,
    "position" INTEGER,

    CONSTRAINT "FeaturedBanner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

/*
  Warnings:

  - Made the column `role` on table `testimonials` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "testimonials" ALTER COLUMN "role" SET NOT NULL;

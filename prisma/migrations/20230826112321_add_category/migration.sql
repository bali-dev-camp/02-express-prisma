/*
  Warnings:

  - Added the required column `categoryId` to the `Shoe` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Shoe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "merk" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "qty" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Shoe_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Shoe" ("available", "createdAt", "desc", "id", "merk", "name", "price", "qty", "updatedAt") SELECT "available", "createdAt", "desc", "id", "merk", "name", "price", "qty", "updatedAt" FROM "Shoe";
DROP TABLE "Shoe";
ALTER TABLE "new_Shoe" RENAME TO "Shoe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

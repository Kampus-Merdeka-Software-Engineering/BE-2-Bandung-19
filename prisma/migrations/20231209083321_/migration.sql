/*
  Warnings:

  - You are about to alter the column `name` on the `Catalog` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2000)` to `VarChar(191)`.
  - You are about to alter the column `nama` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2000)` to `VarChar(191)`.
  - You are about to alter the column `Payment` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2000)` to `VarChar(191)`.
  - You are about to alter the column `name` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2000)` to `VarChar(191)`.
  - You are about to alter the column `imageUrl` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2000)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Catalog` MODIFY `name` VARCHAR(2000) NOT NULL;

-- AlterTable
ALTER TABLE `Order` MODIFY `nama` VARCHAR(2000) NOT NULL,
    MODIFY `Payment` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Product` MODIFY `name` VARCHAR(2000) NOT NULL,
    MODIFY `imageUrl` VARCHAR(2000) NULL;

-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(2000) NOT NULL,
    `adress` TEXT NOT NULL,
    `Payment` VARCHAR(2000) NOT NULL,
    `Total` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

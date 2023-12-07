const express = require("express");
const productRoutes = express.Router();
const { prisma } = require("../config/prisma");

productRoutes.get("/", async (req, res) => {
	const products = await prisma.product.findMany()
	res.status(200).send(products);
});

//create product
productRoutes.post("/", async (req, res) => {
	// const { name, price, imageUrl, catalogId } = req.body
	const newProduct = await prisma.product.create({
		data: {
			name: req.body.name,
			price: parseInt(req.body.price),
			imageUrl: req.body.imageUrl,
			catalogId: parseInt(req.body.catalogId),
		},
	});
	res.status(201).json({
		message: "Product created",
		data: newProduct,
	});
});

// delete product
productRoutes.delete("/:id", async (req, res) => {
	const { id } = req.params;
	await prisma.product.delete({
		where: {
			id: parseInt(id),
		},
	});
	res.status(200).json({
		message: `product with id: ${id} successfully deleted`,
	});
});

// get product by catalogId
productRoutes.get("/:catalogId", async (req, res) => {
	const { catalogId } = req.params;
	const products = await prisma.product.findMany({
		where: {
			catalogId: parseInt(catalogId),
		},
	});
	res.status(200).send(products);
});

module.exports = { productRoutes };

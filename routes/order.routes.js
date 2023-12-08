const express = require('express');
const orderRoutes = express.Router();
const { prisma } = require("../config/prisma");

orderRoutes.get("/", async (req, res) => {
  const order = await prisma.order.findMany();
  res.status(200).send(order);
});


orderRoutes.post("/", async (req, res) => {
  const { nama } = req.body
  const { adress } = req.body
  const { payment } = req.body
  const { total } = req.body
  if (!nama)
    res.status(400).json({ message: "Nama Diperlukan" });
  const newOrder = await prisma.order.create({
    data: {
      nama: nama,
      adress: adress,
      Payment: payment,
      Total: parseInt(total),

    },
  });
  res.status(201).json({
    message: "Order created",
    data: newOrder
  })
});
orderRoutes.get("/:id", async (req, res) => {
  const { id } = req.params
  const order = await prisma.order.findUnique({
    where: {
      id: parseInt(req.params.id)
    },
  });
  if (!order) res.status(404).send("order not found");
  else res.status(200).send(order);
});

orderRoutes.put("/:id", async (req, res) => {
  const { id } = req.params
  const { nama } = req.body
  const updatedOrder = await prisma.order.update({
    where: {
      id: parseInt(id)
    },
    data: {
      nama: nama,

    },
  });
  res.status(200).json({
    message: `order with id : ${id} is updated`,
    data: updatedOrder,
  });
});


orderRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params

  await prisma.order.delete({
    where: {
      id: parseInt(id)
    },
  });
  res.status(200).json({
    message: ` id : ${id} is sucessfully deleted`,
  });
});







module.exports = { orderRoutes };
import express from "express";
import Order from "../models/Order.js";

const Router = express.Router();

// Get-All-Orders (Done)  Agent
Router.get("/", async (req, res) => {
  try {
    const order = await Order.find();
    res.status(200).json(order);
  } catch (error) {
    res.send({ message: error.message });
  }
});

//Get-Order-By-Id (Done) Client-Agent
Router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Post-Order (Done)
Router.post("/", async (req, res) => {
  const order = new Order({
    user_Id: req.body.user_Id,
    products: req.body.products,
    totalPrice: req.body.totalPrice,
  });
  try {
    const addedOrder = await order.save();
    res.status(201).json(addedOrder);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Put-Order  (Done) Agent
Router.put("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    order.user_Id = req.body.user_Id;
    order.products = req.body.products;
    order.totalPrice = req.body.totalPrice;
    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Delete-Order-By-Id  (Done)
Router.delete("/:id", async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedOrder);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});
//Seed-Method
Router.post("/seed", async (req, res) => {
  const order1 = new Order({
    user_Id: "606d559a4626c6443c745f2f",
    products: [
      {
        product_Id: "606d5924a4885f42ac76a87d",
        startDate: "2021-04-07",
        endDate: "2021-04-09",
        pricePerDay: "20",
      },
      {
        product_Id: "606d5924a4885f42ac76a87e",
        startDate: "2021-04-07",
        endDate: "2021-04-10",
        pricePerDay: "10",
      },
    ],
    totalPrice: "80",
  });

  const order2 = new Order({
    user_Id: "606d559a4626c6443c745f30",
    products: [
      {
        product_Id: "606d5924a4885f42ac76a87e",
        startDate: "2021-04-07",
        endDate: "2021-04-10",
        pricePerDay: "10",
      },
      {
        product_Id: "606d5924a4885f42ac76a87d",
        startDate: "2021-04-07",
        endDate: "2021-04-09",
        pricePerDay: "20",
      },
    ],
    totalPrice: "20",
  });

  try {
    const addedOrder1 = await order1.save();
    const addedOrder2 = await order2.save();
    res.status(201).json("all orders are created");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

export default Router;

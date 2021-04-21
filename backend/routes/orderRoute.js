import express from "express";
import Order from "../models/Order.js";

const Router = express.Router();

//Seed-Method
Router.post("/seed", async (req, res) => {
  const order1 = new Order({
    user_Id: "607e3725f430a2101068f1cf",
    products: [
      {
        product_Id: "607e378b6a7058397c1b84f5",
        startDate: "2021-04-07",
        endDate: "2021-04-09",
        pricePerDay: "20",
      },
      {
        product_Id: "607e378b6a7058397c1b84f6",
        startDate: "2021-04-07",
        endDate: "2021-04-10",
        pricePerDay: "10",
      },
    ],
    totalPrice: "80",
  });

  const order2 = new Order({
    user_Id: "607e3725f430a2101068f1cf",
    products: [
      {
        product_Id: "607e378b6a7058397c1b84f5",
        startDate: "2021-04-07",
        endDate: "2021-04-10",
        pricePerDay: "10",
      },
      {
        product_Id: "607e378b6a7058397c1b84f6",
        startDate: "2021-04-07",
        endDate: "2021-04-09",
        pricePerDay: "20",
      },
    ],
    totalPrice: "20",
  });

  const order3 = new Order({
    user_Id: "607e3725f430a2101068f1cf",
    products: [
      {
        product_Id: "607e378b6a7058397c1b84f5",
        startDate: "2021-04-07",
        endDate: "2021-04-10",
        pricePerDay: "10",
      },
      {
        product_Id: "607e378b6a7058397c1b84f6",
        startDate: "2021-04-07",
        endDate: "2021-04-09",
        pricePerDay: "20",
      },
    ],
    totalPrice: "80",
  });

  try {
    const addedOrder1 = await order1.save();
    const addedOrder2 = await order2.save();
    const addedOrder3 = await order3.save();
    res.status(201).json("all orders are created");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

export default Router;

import express from "express";
import Delivery from "../models/Delivery.js";

const Router = express.Router();

// Get-All-Deliverys (Done) Agent
Router.get("/", async (req, res) => {
  try {
    const deliverys = await Delivery.find();
    res.status(200).json(deliverys);
  } catch (error) {
    res.send({ message: error.message });
  }
});

//Get-Delivery-By-Id (Done) DeliveryAgent
Router.get("/:id", async (req, res) => {
  try {
    const delivery = await Delivery.findById(req.params.id);
    res.status(200).json(delivery);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Post-Delivery (Done) Agent
Router.post("/", async (req, res) => {
  const delivery = new Delivery({
    deliveryAgent_id: req.body.deliveryAgent_id,
    order_Id: req.body.order_Id,
    deliveryMode: req.body.deliveryMode,
    state: req.body.state,
  });
  try {
    const addedDelivery = await delivery.save();
    res.status(201).json(addedDelivery);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Put-Delivery (Done) Agent
Router.put("/:id", async (req, res) => {
  try {
    const delivery = await Delivery.findById(req.params.id);
    delivery.state = "delivred";
    const updateDelivery = await delivery.save();
    res.status(201).json(updateDelivery);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Delete-Delivery-By-Id  (Done) Agent

Router.delete("/:id", async (req, res) => {
  try {
    const deletedDelivery = await Delivery.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedDelivery);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Seed-Method
Router.post("/seed", async (req, res) => {
  const delivery1 = new Delivery({
    deliveryAgent_id: "606d559a4626c6443c745f2f",
    order_Id: "606d603ac0a7b82660700339",
    deliveryMode: "OneToOne",
    state: "notyet",
  });

  const delivery2 = new Delivery({
    deliveryAgent_id: "606d559a4626c6443c745f30",
    order_Id: "606d603ac0a7b8266070033c",
    deliveryMode: "delivery",
    state: "notyet",
  });

  try {
    const addedDelivery1 = await delivery1.save();
    const addedDelivery2 = await delivery2.save();
    res.status(201).json("all deliverys are created");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

export default Router;

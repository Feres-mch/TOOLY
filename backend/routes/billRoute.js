import express from "express";
import Bill from "../models/Bill.js";

const Router = express.Router();

// Get-All-Biils (Done)
Router.get("/", async (req, res) => {
  try {
    const bills = await Bill.find();
    res.status(200).json(bills);
  } catch (error) {
    res.send({ message: error.message });
  }
});

//Get-Bill-By-Id (Done)
Router.get("/:id", async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    res.status(200).json(bill);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Post-Bill (Done)
Router.post("/", async (req, res) => {
  const bill = new Bill({
    order_Id: req.body.order_Id,
    payementMedthod: req.body.payementMedthod,
    payed: req.body.payed,
  });
  try {
    const addedBill = await bill.save();
    res.status(201).json(addedBill);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Put-Bill  (Done)
Router.put("/:id", async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    bill.payed = "yes";
    const updatedBill = await bill.save();
    res.status(200).json(updatedBill);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Delete-Bill-By-Id  (Done)
Router.delete("/:id", async (req, res) => {
  try {
    const deletedBill = await Bill.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedBill);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Seed-Method
Router.post("/seed", async (req, res) => {
  const bill1 = new Bill({
    order_Id: "606d603ac0a7b82660700339",
    payementMedthod: "cash",
    payed: "no",
  });

  const bill2 = new Bill({
    order_Id: "606d603ac0a7b8266070033c",
    payementMedthod: "online",
    payed: "no",
  });

  try {
    const addedBill1 = await bill1.save();
    const addedBill2 = await bill2.save();
    res.status(201).json("all bills are created");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

export default Router;

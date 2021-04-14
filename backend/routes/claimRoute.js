import express from "express";
import mongoose from "mongoose";
import Claim from "../models/Claim.js";

const Router = express.Router();

// Get-All-Claims (Done) Agent
Router.get("/", async (req, res) => {
  try {
    const claims = await Claim.find();
    res.status(200).json(claims);
  } catch (error) {
    res.send({ message: error.message });
  }
});

//Get-Claim-By-Id (Done) Client,Agent
Router.get("/:id", async (req, res) => {
  try {
    const claim = await Claim.findById(req.params.id);
    res.status(200).json(claim);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Get-All-Claim-By-UserId (Done) Client
Router.get("/user/:id", async (req, res) => {
  try {
    const claims = await Claim.find({
      userId: new mongoose.Types.ObjectId(req.params.id),
    }).exec();
    res.status(200).json(claims);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Post-Claim (Done) Client
Router.post("/", async (req, res) => {
  const claim = new Claim({
    userId: req.body.userId,
    description: req.body.description,
    about: req.body.about,
    state: req.body.state,
  });
  try {
    const addedClaim = await claim.save();
    res.status(201).json(addedClaim);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Put-Claim Done) Agent
Router.put("/:id", async (req, res) => {
  try {
    const claim = await Claim.findById(req.params.id);
    claim.state = "resolved";
    const updateClaim = await claim.save();
    res.status(201).json(updateClaim);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Delete-Claim-By-Id  (Done) No-Use

Router.delete("/:id", async (req, res) => {
  try {
    const deletedClaim = await Claim.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedClaim);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Seed-Method
Router.post("/seed", async (req, res) => {
  const claim1 = new Claim({
    userId: "606d559a4626c6443c745f2f",
    description:
      "i didn't found what i need ,you need to add more products and categories",
    about: "general",
  });

  const claim2 = new Claim({
    userId: "606d559a4626c6443c745f30",
    description:
      "i think that the product with reference xxxx have a cost to much expensive and buying it would be much better",
    about: "product",
  });

  try {
    const addedClaim1 = await claim1.save();
    const addedClaim2 = await claim2.save();
    res.status(201).json("all claims are created");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

export default Router;

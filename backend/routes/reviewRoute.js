import express from "express";
import mongoose from "mongoose";
import Review from "../models/Review.js";

const Router = express.Router();

// Get-All-Reviews (Done)
Router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.send({ message: error.message });
  }
});

//Get-Review-By-Id (Done)
Router.get("/:id", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    res.status(200).json(review);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Get-All-Review-By-UserId (Done) Client
Router.get("/user/:id", async (req, res) => {
  try {
    const reviews = await Review.find({
      userId: new mongoose.Types.ObjectId(req.params.id),
    }).exec();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Post-Review (Done)  Client
Router.post("/", async (req, res) => {
  const review = new Review({
    userId: req.body.userId,
    description: req.body.description,
    date: req.body.date,
  });
  try {
    const addedReview = await review.save();
    res.status(201).json(addedReview);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Delete-Review-By-Id  (Done) no_use

Router.delete("/:id", async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedReview);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Seed-Method
Router.post("/seed", async (req, res) => {
  const review1 = new Review({
    userId: "606d559a4626c6443c745f2f",
    description:
      "i think that the product with reference xxxx have a cost to much expensive and buying it would be much better",
  });

  const review2 = new Review({
    userId: "606d559a4626c6443c745f30",
    description:
      "i didn't found what i need ,you need to add more products and categories",
  });

  try {
    const addedReview1 = await review1.save();
    const addedReview2 = await review2.save();
    res.status(201).json("all Reviews are created");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

export default Router;

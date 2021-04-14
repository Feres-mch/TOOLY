import express from "express";
import Product from "../models/Product.js";
import mongoose from "mongoose";

const Router = express.Router();

// Get-All-Products (Done) Client-Agent
Router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.send({ message: error.message });
  }
});

//Get-Product-By-Id (Done) Client-Agent
Router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Get-All-Products-By-UserId (Done) Client
Router.get("/user/:id", async (req, res) => {
  try {
    const products = await Product.find({
      userId: new mongoose.Types.ObjectId(req.params.id),
    }).exec();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Post-Product (Done) Client
Router.post("/", async (req, res) => {
  const product = new Product({
    userId: req.body.userId,
    name: req.body.name,
    brand: req.body.brand,
    reference: req.body.reference,
    category: req.body.category,
    pricePerDay: req.body.pricePerDay,
    description: req.body.description,
    tutorial: req.body.tutorial,
    rating: req.body.rating,
  });
  try {
    const addedProduct = await product.save();
    res.status(201).json(addedProduct);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Put-Product (Done)  Client
Router.put("/:id", async (req, res) => {
  try {
    const upProduct = await Product.findById(req.params.id);
    (upProduct.name = req.body.name),
      (upProduct.brand = req.body.brand),
      (upProduct.reference = req.body.reference),
      (upProduct.category = req.body.category),
      (upProduct.pricePerDay = req.body.pricePerDay),
      (upProduct.description = req.body.description),
      (upProduct.tutorial = req.body.tutorial);

    const upproduct = await upProduct.save();
    res.status(200).json(upproduct);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Delete-Product-By-Id  (Done)
Router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

////Seed-Method
Router.post("/seed", async (req, res) => {
  const product1 = new Product({
    userId: "606d559a4626c6443c745f2f",
    name: "black decker",
    brand: "decker",
    reference: "08ab34",
    category: "DIY",
    pricePerDay: 80,
    description: "this product is awseome",
    tutorial: "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
    images: {
      img1: "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
      img2: "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
      img3: "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
      img4: "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
    },
  });
  const product2 = new Product({
    userId: "606d559a4626c6443c745f30",
    name: "gloves",
    brand: "boch",
    reference: "WD020812045",
    category: "Gardning",
    pricePerDay: 20,
    description: "this product is awseome",
    tutorial: "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
    images: {
      img1: "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
      img2: "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
      img3: "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
      img4: "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
    },
  });
  try {
    const addedProduct1 = await product1.save();
    const addedProduct2 = await product2.save();
    res.status(201).json("all products created");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

export default Router;

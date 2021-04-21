import express from "express";
import Product from "../models/Product.js";
import mongoose from "mongoose";

const Router = express.Router();

//Get-All-Products-By-User-Id
Router.get("/allproducts/:id", async (req, res) => {
  const products = [];
  const allproducts = await Product.find({
    user_Id: new mongoose.Types.ObjectId(req.params.id),
  });
  allproducts.map((product) =>
    products.push({
      reference: product.reference,
      name: product.name,
      _id: product._id,
      brand: product.brand,
      category: product.category,
      price: product.pricePerDay,
      image: product.images.img1,
    })
  );
  res.json(products);
});

//Seed-Method
Router.post("/seed", async (req, res) => {
  const product1 = new Product({
    user_Id: "607e3725f430a2101068f1cf",
    name: "black decker",
    brand: "decker",
    reference: "08ab34",
    category: "DIY",
    pricePerDay: 80,
    description: "this product is awseome",
    tutorial: "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
    images: {
      img1: "https://via.placeholder.com/150",
      img2: "https://via.placeholder.com/150",
      img3: "https://via.placeholder.com/150",
      img4: "https://via.placeholder.com/150",
    },
  });
  const product2 = new Product({
    user_Id: "607e3725f430a2101068f1cf",
    name: "gloves",
    brand: "boch",
    reference: "WD020812045",
    category: "Gardning",
    pricePerDay: 20,
    description: "this product is awseome",
    tutorial: "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
    images: {
      img1: "https://via.placeholder.com/150",
      img2: "https://via.placeholder.com/150",
      img3: "https://via.placeholder.com/150",
      img4: "https://via.placeholder.com/150",
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

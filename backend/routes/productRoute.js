import express from "express";
import Product from "../models/Product.js";
import mongoose from "mongoose";
import multer from "multer";
import cloudinary from "cloudinary";
import fs from "fs";
import path from "path";
import { url } from "inspector";

const Router = express.Router();

//cloudinary
cloudinary.config({
  cloud_name: "desnbv3mq",
  api_key: "857734993565551",
  api_secret: "23Dyf2thm1EgK6_KwXs7sXG4CoM",
});

//stores files on disk with multer
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
});

//Get-All-Products-By-User-Id
Router.get("/allproducts/:id", async (req, res) => {
  const products = [];
  try {
    const allproducts = await Product.find({
      user_Id: new mongoose.Types.ObjectId(req.params.id),
      enable: true,
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
    res.status(200).json(products);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Add-Product
Router.post(
  "/addproduct",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  async (req, res) => {
    const urls = [];
    const files = req.files;

    const path1 = files.image1[0].path;
    const newPath1 = await cloudinary.uploader.upload(path1);
    urls.push(newPath1.secure_url);
    const path2 = files.image1[0].path;
    const newPath2 = await cloudinary.uploader.upload(path2);
    urls.push(newPath2.secure_url);
    const path3 = files.image1[0].path;
    const newPath3 = await cloudinary.uploader.upload(path3);
    urls.push(newPath3.secure_url);
    const path4 = files.image1[0].path;
    const newPath4 = await cloudinary.uploader.upload(path4);
    urls.push(newPath4.secure_url);

    const product = new Product({
      user_Id: req.body.user_Id,
      name: req.body.name,
      reference: req.body.reference,
      category: req.body.category,
      description: req.body.description,
      brand: req.body.brand,
      tutorial: req.body.tutorial,
      pricePerDay: req.body.pricePerDay,
      images: {
        img1: urls[0],
        img2: urls[0],
        img3: urls[0],
        img4: urls[0],
      },
      enable: true,
    });

    try {
      const productAdded = await product.save();
      res.status(201).json(productAdded);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  }
);

//Delete-Product-By-Id
Router.put("/delete/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, {
      enable: false,
    });
    res.status(200).send("Product deleted succsessfully");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
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

import express from "express";
import User from "../models/User.js";

const Router = express.Router();

// Get-All-Users (done)   Agent
Router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.send({ message: error.message });
  }
});

//Get-User-By-Id (done) Agent-Client
Router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Post-User (done)     Client
Router.post("/", async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email,
    address: req.body.address,
    birthDate: req.body.birthDate,
    identityCard: req.body.identityCard,
    phoneNumber: req.body.phoneNumber,
    sexe: req.body.sexe,
    type: req.body.type,
  });
  try {
    const addedUser = await user.save();
    res.status(201).json(addedUser);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Put-User (done)    Client
Router.put("/:id", async (req, res) => {
  try {
    const upUser = await User.findById(req.params.id);
    (upUser.firstName = req.body.firstName),
      (upUser.lastName = req.body.lastName),
      (upUser.userName = req.body.userName),
      (upUser.email = req.body.email),
      (upUser.address = req.body.address),
      (upUser.birthDate = req.body.birthDate),
      (upUser.identityCard = req.body.identityCard),
      (upUser.phoneNumber = req.body.phoneNumber),
      (upUser.sexe = req.body.sexe),
      (upUser.type = req.body.type),
      (upUser.verified = "true");

    const upuser = await upUser.save();
    res.status(200).json(upuser);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Put-Verification-User-By-Id (Done) Agent
Router.put("/state/:id", async (req, res) => {
  try {
    const upUser = await User.findById(req.params.id);
    upUser.verified = !upUser.verified;
    const upuser = await upUser.save();
    res.status(200).json(upuser);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Delete-User-By-Id  (Done)    No-Use
Router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Seed-Method
Router.post("/seed", async (req, res) => {
  const user1 = new User({
    firstName: "radhouan",
    lastName: "khouadja",
    userName: "radhouankh",
    email: "radhouankhouadja@gmail.com",
    address: {
      street: "rue",
      city: "ariana",
      state: "arianasoghra",
      postalCode: 2093,
    },
    images: {
      profileImage:
        "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
      firstVerificationImage:
        "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
      secondVerificationImage:
        "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
      require: true,
    },
    birthDate: "1990-10-27",
    identityCard: "09741887",
    phoneNumber: 55231990,
    sexe: "male",
    type: "client",
  });

  const user2 = new User({
    firstName: "feres",
    lastName: "mechemech",
    userName: "feresmc",
    email: "feresmechmecha@gmail.com",
    address: {
      street: "rue",
      city: "ariana",
      state: "arianasoghra",
      postalCode: 2093,
    },
    images: {
      profileImage:
        "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
      firstVerificationImage:
        "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
      secondVerificationImage:
        "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
      require: true,
    },
    birthDate: "1996-10-27",
    identityCard: "66666666",
    phoneNumber: 24319797,
    sexe: "male",
    type: "agent",
  });

  try {
    const addedUser1 = await user1.save();
    const addedUser2 = await user2.save();
    res.status(200).json("added all users");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

export default Router;

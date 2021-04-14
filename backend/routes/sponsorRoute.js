import express from "express";
import Sponsor from "../models/Sponsor.js";

const Router = express.Router();

// Get-All-Sponsors (Done) Agent
Router.get("/", async (req, res) => {
  try {
    const sponsors = await Sponsor.find();
    res.status(200).json(sponsors);
  } catch (error) {
    res.send({ message: error.message });
  }
});

//Get-Sponsor-By-Id (Done) Agent
Router.get("/:id", async (req, res) => {
  try {
    const sponsor = await Sponsor.findById(req.params.id);
    res.status(200).json(sponsor);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Post-Sponsor (Done) Agent
Router.post("/", async (req, res) => {
  const sponsor = new Sponsor({
    brand: req.body.brand,
    logo: req.body.logo,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    price: req.body.price,
  });
  try {
    const addedSponsor = await sponsor.save();
    res.status(201).json(addedSponsor);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Put-Sponsor (Done) Agent
Router.put("/:id", async (req, res) => {
  try {
    const upSponsor = await Sponsor.findById(req.params.id);
    (upSponsor.brand = req.body.brand),
      (upSponsor.logo = req.body.logo),
      (upSponsor.startDate = req.body.startDate),
      (upSponsor.endDate = req.body.endDate),
      (upSponsor.price = req.body.price);

    const upsponsor = await upSponsor.save();
    res.status(201).json(upsponsor);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Delete-Sponsor-By-Id  (Done) Agent

Router.delete("/:id", async (req, res) => {
  try {
    const deletedSponsor = await Sponsor.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedSponsor);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

//Seed-Method
Router.post("/seed", async (req, res) => {
  const sponsor1 = new Sponsor({
    brand: "bosh",
    logo: "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
    startDate: "2021-04-07",
    endDate: "2021-06-09",
  });

  const sponsor2 = new Sponsor({
    brand: "cat",
    logo: "//www.yoursite.com/random_images_folder_path/mypicture.jpg",
    startDate: "2021-04-06",
    endDate: "2021-05-10",
  });

  try {
    const addedSponsor1 = await sponsor1.save();
    const addedSponsor2 = await sponsor2.save();
    res.status(201).json("all Sponsors are created");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

export default Router;

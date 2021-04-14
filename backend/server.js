import express from "express";
import dotenv from "dotenv";
import dataBase from "./dataBase/mongo.js";
import billsRoute from "./routes/billRoute.js";
import usersRoute from "./routes/userRoute.js";
import productsRoute from "./routes/productRoute.js";
import claimsRoute from "./routes/claimRoute.js";
import reviewsRoute from "./routes/reviewRoute.js";
import sponsorsRoute from "./routes/sponsorRoute.js";
import deliverysRoute from "./routes/deliveryRoute.js";
import ordersRoute from "./routes/orderRoute.js";

//config
dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routing
app.use("/users", usersRoute);
app.use("/products", productsRoute);
app.use("/bills", billsRoute);
app.use("/claims", claimsRoute);
app.use("/reviews", reviewsRoute);
app.use("/sponsors", sponsorsRoute);
app.use("/deliverys", deliverysRoute);
app.use("/orders", ordersRoute);

//port-config
const port = process.env.PORT || 5000;
app.get("/", (req, res) => res.send("serve is ready ....."));
app.listen(port, () =>
  console.log(`server is listening at http://localhost:${port}`)
);

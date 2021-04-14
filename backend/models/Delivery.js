import mongoose from "mongoose";

const deliverSchema = mongoose.Schema({
  deliveryAgent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  order_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  deliveryMode: {
    type: String,
    enum: ["OneToOne", "delivery"],
  },
  state: {
    type: String,
    enum: ["delivred", "notyet"],
    default: "notyet",
  },
});

const Delivery = mongoose.model("Delivery", deliverSchema);

export default Delivery;

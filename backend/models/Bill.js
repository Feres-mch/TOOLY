import mongoose from "mongoose";

const billSchema = mongoose.Schema({
  order_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
  payementMedthod: { type: String, enum: ["cash", "online"] },
  payed: { type: String, enum: ["yes", "no"] },
  date: { type: Date, required: true, default: Date.now() },
});

const Bill = mongoose.model("Bill", billSchema);

export default Bill;

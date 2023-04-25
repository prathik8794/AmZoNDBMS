import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema({
    sellerId: String,
    itemName: String,
    itemPrice: Number,
    quantity: Number,
    itemTotalPrice: Number,
    bankId: String,
  });

export const Item = mongoose.model("Item", ItemSchema);


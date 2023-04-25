import mongoose from "mongoose";
const CartSchema = new mongoose.Schema({
    userId: String,
    itemId: String,
    itemName: String,
    itemPrice: Number,
    quantity: Number,
});

export const Cart = mongoose.model("Cart", CartSchema);
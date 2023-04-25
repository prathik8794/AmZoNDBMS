import "mongoose"
import { Item } from "./itemSchema.js";

export const updateItem = (req, res) => {
    const id = req.body.id;
    const quantity = req.body.quantity;
    const itemPrice = req.body.itemPrice;
    const bankId = req.body.bankId;
    Item.findByIdAndUpdate({_id:id}, { quantity: quantity, itemPrice: itemPrice, itemTotalPrice: quantity * itemPrice, bankId: bankId }).then(
        (updatedItem) => {
            res.status(201).send(updatedItem);
        }
    ).catch((err) => {
        res.status(500).send(err);
    })
}

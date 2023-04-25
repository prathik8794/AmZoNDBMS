import "mongoose"
import { Item } from "./itemSchema.js";

export const deleteItem = (req, res) => {
    //delete by productId
    const id = req.body.id;
    Item.deleteOne({ _id: id })
      .then((deletedItem) => {
        res.status(201).send(deletedItem);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }

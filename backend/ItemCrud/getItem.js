import "mongoose"
import { Item } from "./itemSchema.js";

export const getItem = (req, res) => {
    Item.find()
    .then((items) => {
      res.send(items);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}
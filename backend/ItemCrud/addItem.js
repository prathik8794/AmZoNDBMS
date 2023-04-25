import "mongoose"
import { Item } from "./itemSchema.js";

export const addItem = (req, res) => {
    const newItem = new Item({
      sellerEmail: req.body.sellerEmail,
      itemName: req.body.itemName,
      itemPrice: req.body.itemPrice,
      quantity: req.body.quantity,
      itemTotalPrice: req.body.itemPrice * req.body.quantity,
      bankId: req.body.bankId,
    });
  
    newItem.save()
      .then((savedItem) => {
        res.status(201).send(savedItem);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
  

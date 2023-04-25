import "mongoose"
import { Cart } from "./CartSchema.js";

export const addCart = (req, res) => {
    const newCart = new Cart({
        userId: req.body.userId,
        itemName: req.body.itemName,
        itemPrice: req.body.itemPrice,
        quantity: req.body.quantity,
        itemId: req.body.itemId,
        });
    newCart.save()
        .then((savedCart) => {
            res.status(201).send(savedCart);
        }
        )
        .catch((err) => {
            res.status(500).send(err);
        }
        );
};
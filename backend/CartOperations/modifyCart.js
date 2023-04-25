import "mongoose"
import { Cart } from "./CartSchema.js";

export const modifyCart = (req, res) => {
    const id = req.body.id;
    const quantity = req.body.quantity;
    console.log(quantity)
    if(quantity == 0){
        //if quantity becomes zero just remove it from db.....
        Cart.findByIdAndDelete({_id:id}).then(
            (updatedItem) => {
                res.status(201).send(updatedItem);
            }
        ).catch((err) => {
            res.status(201).send(updatedItem);
        })
    }else{
        Cart.findByIdAndUpdate({_id:id}, { quantity: quantity }).then(
            (updatedItem) => {
                res.status(201).send(updatedItem);
            }
        ).catch((err) => {
            res.status(500).send(err);
        })
    }
}

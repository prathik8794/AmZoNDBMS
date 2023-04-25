import "mongoose"
import { Cart } from "./CartSchema.js";
import mysql from "mysql";

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce'
})

export const BuyCart = async (req, res) => {
    const id = req.body.userId;
    console.log(id)
    const cartItems = await Cart.find({userId:id});
    let total = 0;
    let bankBalance = 0
    cartItems.forEach((item)=>{
        total += item.itemPrice * item.quantity;
    })
    console.log(cartItems)
    console.log(total)
    const query = "SELECT balance FROM bank WHERE `id` = ?"
    db.query(query,[id],(err,data)=>{
        if(err){
            console.log(err)
            return res.json({ message: 'Transaction failed' });
        }else{
            if(data.length==0){
                res.status(201).send("Transaction failed");
            }else{
                bankBalance = data[0].balance;
                //console.log(bankBalance)
                //res.status(201).send(data[0].balance.toString());
                if(bankBalance >= total){
                    //update bank balance and also send that each cart item amount to respective seller account.....
                    const query2 = "UPDATE bank SET balance = balance - ? WHERE id = ?"
                    db.query(query2,[total,id],(err,data)=>{
                        if(err){
                            console.log(err)
                            return res.json({ message: 'Transaction failed' });
                        }else{
                            //deleting all cart items.....
                            Cart.deleteMany({userId:id}).then(
                                (updatedItem) => {
                                    res.status(201).send(updatedItem);
                                }
                            ).catch((err) => {
                                res.status(201).send(err);
                            })

                        }
                    });
                }else{
                    res.status(201).send("Transaction failed");
                }
            }
        }
    })
}
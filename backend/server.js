import express from "express"
import mysql from "mysql"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from 'dotenv';

import { addItem } from "./ItemCrud/addItem.js";
import {getItem} from "./ItemCrud/getItem.js"
import {deleteItem} from "./ItemCrud/deleteItem.js"
import {updateItem} from "./ItemCrud/updateItem.js"
import { addCart } from "./CartOperations/AddCart.js";
import { modifyCart } from "./CartOperations/modifyCart.js";
import { BuyCart } from "./CartOperations/BuyCart.js";


dotenv.config()
const app = express()

app.use(bodyParser.json())

//mysql connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce'
})

//mongodb connection
const url = process.env.MONGO_URL
// console.log(url)
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

const dbM = mongoose.connection;
dbM.on('error', console.error.bind(console, 'connection error:'));
dbM.once('open', function() {
  console.log('Connected to MongoDB');
});

//login api
app.post('/login', (req, res)=>{
    const email = req.body?.email;
    const password = req.body?.password;
    console.log(email, password);
    const query = "SELECT * FROM login WHERE `email` = ? AND `password` = ?"
    db.query(query,[email,password],(err,data)=>{
        if(err){
            console.log(err)
            return res.json({ message: 'Login failed' });
        }else{
            if(data.length == 0){
                return res.json({ message: 'Login failed' });
            }else{
                return res.json({ message: 'Login successful' });
            }
        }
    })
})

//signup api
app.post('/signup', (req, res)=>{
    const name = req.body?.name;
    const email = req.body?.email;
    const password = req.body?.password;
    const isSeller = req.body?.isSeller;
    const query = "INSERT INTO login (`name`, `email`, `password`,`isSeller`) VALUES (?, ?, ?, ?)"
    db.query(query,[name,email,password,isSeller],(err,data)=>{
        if(err){
            console.log(err)
            return res.json({ message: 'Signup failed' });
        }else{
            return res.json({ message: 'Signup successful' });
        }
    })
})

//crud OPERATIONS.........
app.get('/addItem', addItem);
app.get('/getItem',getItem)
app.get('/deleteItem',deleteItem);
app.get('/updateItem',updateItem);


//cart OPERATIONS.......
app.get('/addCart', addCart);
app.get('/modifyCart', modifyCart);
app.get('/buyCart', BuyCart);

//dummy api
app.get('/hello',(req,res)=>{
    res.send('hello')
    }
)


app.listen(8080, ()=>{
    console.log('running on port 8080')
})
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export const AddItem = (req, res) => {
        //displaying all items from the mongodb databse
    const[items, setItems] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/getItem').then((response)=>{
            setItems(response.data)
            //console.log(items)
        }).catch((err)=>{
            console.log(err)
        })
    })
    return (
        <div>
            <h1>Welcome to AmZon</h1>
            <h2>Here are all the items available</h2>
            {
                items.map((item)=>{
                    return (
                        <table>
                            <tr>
                                <td>{item.itemName}</td>
                                <td>{item.itemPrice}</td>
                                <td>{item.quantity}</td>
                                <td>{item.itemPrice}</td>
                            </tr>
                        </table>

                    )
                })
            }
        </div>
    )


}
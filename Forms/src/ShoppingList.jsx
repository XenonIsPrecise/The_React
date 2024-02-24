import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import {v4 as uuid} from "uuid"

export default function ShoppingList(){
    const [items,setItems] = useState([{id:uuid(),product:"Apple",quantity:420},{id:uuid(),product:"Pineapple",quantity:69}]);
    // const addItems=(item)=>{
    //     setItems((currData)=>{
    //         return (
    //             [{...currData},{...item, id:9}]
    //         )
    //     })
    // }
    const addItems = (item) => {
        setItems((currData) => [...currData, { ...item, id: uuid() }]);

    };
    return(
        <div>
            <ul>
                {items.map((i)=>(
                   <li key={i.id}> {i.product} - {i.quantity}</li>
                ))}
            </ul>
            <ShoppingListForm addItem={addItems} />
        </div>
        
    )
}


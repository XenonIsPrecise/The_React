import { useState } from "react"

export default function ShoppingListForm(){
    const [formData, setFormData] = useState({product:"",quantity:0})
    const handleEvent = (evt)=>{
        setFormData((currData=>{
            return {
                ...currData, [evt.target.name]:evt.target.value
            }
        }))
    }
return(
    <>
    <h1>Product is: {formData.product} - {formData.quantity}</h1>
        <div>
            <label htmlFor="product">Product Name:</label>
            <input onChange={handleEvent} type="text" name="product" id="product" value={formData.product}></input>
        </div>
        <div>
            <label htmlFor="quantity">Product Quantity:</label>
            <input onChange={handleEvent} type="number" name="quantity" id="quantity" value={formData.quantity}></input>
        </div>
        <button>Add Items</button>
    </>
)

}
import { useState } from "react"


export default function ShoppingListForm({addItem}){
    const [formData, setFormData] = useState({product:"",quantity:0})
    const handleEvent = (evt) => {
        setFormData((currData) => ({
            ...currData,
            [evt.target.name]: evt.target.value,
        }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault(); 
        addItem(formData)
        setFormData({product:"",quantity:0})
    }
return(
    <form onSubmit={handleSubmit}>
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
    </form>
)

}
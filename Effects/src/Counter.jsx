import { useEffect, useState } from "react"

export default function Counter() {
    const[name, setName] = useState("");
    const handleChange = (e)=>{
        setName(e.target.value);
    }

    const [count, setCount]=useState(0);
    const Increase =()=>{
        setCount(c=>(c+1));
    }
    useEffect(function myEffect(){
        console.log("Effect is in Action!")
    },[count])
    return(
        <div>
        <button onClick={Increase}>Current count = {count}</button>
        <label htmlFor="name">Name: {name}</label>
        <input id="name" value={name} type="text" onChange={handleChange} />
        </div>
        
    )
}
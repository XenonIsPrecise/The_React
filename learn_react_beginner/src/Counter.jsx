import { useState } from "react"

export default function Counter(){
    const [num,setNum]=useState(1);
    const Increase =()=>
        setNum(num+1);

    return(
        <div>
            <button onClick={Increase}>Click to Increase by 1</button>
            <p>The number {num} is changing.</p>
        </div>
    )
}
import { useState } from "react"

export default function Toggler(){
    const [isHappy, setIsHappy]= useState(true)
    const change = ()=>(
        setIsHappy(!isHappy)
    )
    return(
        <div>
            <button onClick={change}>Click to Change my emotion: {isHappy?"😃":"😞"}</button>
        </div>
    )
}
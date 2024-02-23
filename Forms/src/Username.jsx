import { useState } from "react"

export default function Username(){
    const [Uname,setUname] = useState("Username");
    const changeName =(evt)=>{
        setUname(evt.target.value)
    }

    return (
        <div>
            <label htmlFor="username">Enter your Username:</label>
            <input id="username" type="text" value={Uname} onChange={changeName}></input>
        </div>
    )
}
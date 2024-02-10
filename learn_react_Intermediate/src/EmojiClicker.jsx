import { useState } from "react"

export default function EmojiClicker(){
    const [emoji,setEmoji]=useState(["😂"])
    function addEmoji(){
        setEmoji((oldEmoji)=>{
            return [...oldEmoji,"❤️"]
        })
    }
    // const addEmoji=()=>{
    //     setEmoji((oldEmoji)=>{
    //         return [...oldEmoji,"❤️"]
    //     })
    // }
    

    return(
        <div>
            {emoji.map((emoji)=>(
     <span>{emoji}</span>
        ))}
            <br />
            <button onClick={addEmoji}>Add Emojis</button>
        </div>
    )

}

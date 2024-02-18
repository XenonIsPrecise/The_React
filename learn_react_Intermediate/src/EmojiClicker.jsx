import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./EmojiClicker.css"

export default function EmojiClicker() {
  const [emoji, setEmoji] = useState([{ id: uuidv4(), emoji: "🥹" }]);
  function addEmoji() {
    setEmoji((oldEmoji) => {
      return [...oldEmoji, { id: uuidv4(), emoji: "😵" }];
    });
  }

  function deleteEmoji(id){
    setEmoji((prevemoji)=>{
        return prevemoji.filter((e)=>e.id !==id)
    })
  }
  // const addEmoji=()=>{
  //     setEmoji((oldEmoji)=>{
  //         return [...oldEmoji,"❤️"]
  //     })
  // }

  return (
    <div>
      {emoji.map((e) => (
        <span className="oneEmoji" onClick={() => deleteEmoji(e.id)} key={e.id}>
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emojis</button>
    </div>
  );
}

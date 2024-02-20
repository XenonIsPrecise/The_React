import { useState } from "react";
import { getRolls } from "./utils";
import Dice from "./Dice";
import{sum} from "./utils";
import Button from "./Button";

export default function LuckyN({numDice=2, winCheck}){
    const [dice,setDice]=useState(getRolls(numDice));
    const isWinner =winCheck(dice);
    const reroll= ()=>setDice(getRolls(numDice));
    return(
        <main className="LuckyN">
            <h2>Lucky {isWinner && "You Won"}</h2>
            <Dice dice={dice}/> 
            {/* <button onClick={reroll}>Re-Roll</button> */}
            <Button clickFunc={reroll}/>
        </main>
    )
}
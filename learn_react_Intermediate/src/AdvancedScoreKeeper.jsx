import { useState } from "react";

export default function AdvancedScoreKeeper({numPlayers=2,target=3}){
        const [scores,setScores] =useState(new Array(numPlayers).fill(0));
        const increaseScore=(indx)=>{
            setScores((oldScore)=>{
                return oldScore.map((score, i)=>{
                    if(indx===i){
                        return score+1;
                    }
                    return score;
                })
            })
        }

        const resetScore = ()=>{
            setScores(new Array(numPlayers) .fill(0))
        }

 return (
    <div>
        <h1>Advance Score Keeper</h1>
        <ul>
        {
            scores.map((score,index)=>{
                 return <li key={index}>Player{index+1}: {score}
                  <button onClick={()=>increaseScore(index)}>
                    +1
                  </button>
                  {score >= target && "Winner!!!"}
                  </li>
            })
            
        }
        </ul>
        <button onClick={resetScore}>Reset</button>
    </div>
 )
}
import { useState } from "react"

export default function ScoreKeeper(){
    const [Scores, setScores]=useState({p1Score:0,p2Score:0});
    function increasePlayer1(){
        setScores((oldScore)=>{
            return {...oldScore,p1Score:oldScore.p1Score+1}
        })
    }
    function increasePlayer2(){
        setScores((oldScore)=>{
            return{...oldScore, p2Score: oldScore.p2Score+1}
        })
    }
    return(
        <div>
          <p>Player 1:{Scores.p1Score}</p>
          <p>Player 2:{Scores.p2Score}</p>
          <button onClick={increasePlayer1}>+1 Player 1</button>
          <button onClick={increasePlayer2}>+2 Player 2</button>
        </div>
    )
    
}
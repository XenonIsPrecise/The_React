import { useState } from 'react'
import './ColorBox.css'

const randomChoice = function(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}
export default function ColorBox({colors}){
    const [color,setColor]= useState(randomChoice(colors));
    const changeColor = ()=>{
        setColor(randomChoice(colors))
        
    }  
    return(
        <div className='box' style={{ backgroundColor: color }} onClick={changeColor}>
            
        </div>
    )
}
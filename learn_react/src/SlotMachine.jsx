    // Wrong Code. Need to figure out later!!!

export default function SlotMachine({icons}){
    console.log("Before:",icons);
    const reversedIcons = [...icons].reverse();
    console.log("Reversed",reversedIcons);
    const isWiner = icons === reversedIcons;
    return(
        <>
            <div>
                <h2 style={{color:isWiner?"Green":"Red"}}>{ isWiner? "You Win":"You Lose"}</h2>
                <h2>{icons.map((icon)=>(
                    <span>{icon}</span>
                ))}</h2>
            </div>
        </>
    )
}
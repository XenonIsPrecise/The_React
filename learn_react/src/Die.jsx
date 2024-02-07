export default function Die({sides=6}){
    const roll = Math.floor(Math.random()*sides)+1;
    return(
        <>
        <h1>{sides} sided die roll: {roll}</h1>
        </>
    )
}
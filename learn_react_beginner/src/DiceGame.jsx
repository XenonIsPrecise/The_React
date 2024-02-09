export default function DiceGame(){
    const ranOne = Math.floor(Math.random()*3)+1;
    const ranTwo = Math.floor(Math.random()*3)+1;
    const isWinner = ranOne ===ranTwo;
    const styles = {color: isWinner ? "Green":"Red"};
    return(
        <div>
            {/* {ranOne===ranTwo && <h2>You Win</h2>} */}
            <h2 style={styles}>{isWinner ? "You Win":"You Lose"}</h2>
            <h3>1st Roll:{ranOne}</h3>
            <h3>2nd Roll:{ranTwo}</h3>
        </div>
              
    )
}
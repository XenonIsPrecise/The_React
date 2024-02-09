
export default function Clicker({message,buttonText}){
    function onClickHandler(){
        alert(message)
    };
    return (
        // <button onClick={()=>alert(message)}>{buttonText}</button>
        <button onClick={onClickHandler}>{buttonText}</button>
    )
}
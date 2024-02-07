export default function ListPicker({arry}){
    const randomNum = Math.floor(Math.random()*arry.length);
    console.log(randomNum)
    const randomElement = arry[randomNum];
    console.log(randomElement);
    return(
        <div>
            {arry.map((element)=>(
                <li>{element}</li>
            ))}
            <h1>Random Element is: {randomElement}</h1>
        </div>
    )
}
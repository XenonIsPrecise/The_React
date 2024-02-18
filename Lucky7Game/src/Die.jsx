import "./Die.css"
export default function Die({val, color="skyblue"}){
    return(
    <div className="Die" style={{backgroundColor:color}}>
        {val}
    </div>
    )
}
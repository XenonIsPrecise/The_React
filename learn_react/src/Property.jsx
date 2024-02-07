export default function Property({name,price,rating,id}){
    return(
        <div>
            <h3>{name}</h3>
            <h4>${price} a night</h4>
            <h4>{rating} ⭐️</h4>
        </div>
    )
}
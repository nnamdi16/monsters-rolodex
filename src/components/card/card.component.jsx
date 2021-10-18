import './card.style.css'
export const Card = (props) => {
    const {id, name, email} = props.monsters;
     return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        )
}
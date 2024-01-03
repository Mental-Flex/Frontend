import { Link } from 'react-router-dom'


const Card = (props) => {

   


    return(
        <div >

            <Link to={`/publications/${props.id}`} >
            
            <p>{props.name}</p>
            <p>{props.description}</p>
            <img src={props.image} alt={props.name} />
            </Link>

        </div>
    )
}

export default Card
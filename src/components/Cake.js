import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function Cake(props) {
    return (
        <div className="col mb-4 cake">
           <Link to={`/cakedetails/${props.details.cakeid}`}>
            <div className="card ck-card" data-id={props.details.id}>
                <div className="thumbnail"><img src={props.details.image} class="card-img-top" alt="..." /></div>
                <div className="card-body text-dark">
                    <h5 className="card-title">{props.details.name}</h5>
                    <p className="card-text"><b>{'$'+props.details.price}</b></p>
                </div>
            </div>
            </Link>
        </div>
    )
  }
  
  export default Cake;
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "./Loader";
import EmptyCart from "./EmptyCart";
var img = "carousel_card.jpeg";
function Cakedetails(props) {
  let [cart, setAddcart] = useState({});
  let [isLoading, setLoading] = useState();
  let [cakeDetails, setcakeDetails] = useState([]);
  let params = useParams();
  useEffect(() => {
    setLoading(true);
    let cakeDetailsApi =
      "https://apibyashu.herokuapp.com/api/cake/" + params.cakeid;
    axios({
      url: cakeDetailsApi,
      method: "get",
    }).then(
      (response) => {
        console.log("response from  cake details  api", response.data);
        setLoading(false);
        setcakeDetails(response.data.data);
      },
      (error) => {
        console.log("error from cake details api", error);
      }
    );
  }, []);

  var addToCart = () => {
    var cartDetails = {
      cakeid: cakeDetails.cakeid,
      image: cakeDetails.image,
      name: cakeDetails.name,
      price: cakeDetails.price,
      weight: cakeDetails.weight,
    };
    console.log("added cake details", cartDetails);
    var token = localStorage.token;
    let cartapi = "https://apibyashu.herokuapp.com/api/addcaketocart";
    axios({
      url: cartapi,
      method: "post",
      data: cartDetails,
      headers: {
        authtoken: token,
      },
    }).then(
      (response) => {
        setAddcart(response.data.data);
        props.history.push("/cart");
      },
      (error) => {
        console.log("error from add to cart api", error);
      }
    );
  };

  return (
    <div className="cakedetails jumbotron jumbotron-fluid">
      {!isLoading ? (
        <div className="container">
          <div class="card cake">
            <div className="thumbnail">
              <img src={cakeDetails.image} className="card-img-top" alt="..." />
            </div>
            <div class="card-body">
              <h5 class="card-title">{cakeDetails.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                {cakeDetails.ingredients}
              </h6>
              <p class="card-text">{cakeDetails.description}</p>
              <p class="card-text">
                <b>{"$ " + cakeDetails.price}</b>
              </p>
              <a class="btn btn-success" onClick={addToCart}>
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Cakedetails;

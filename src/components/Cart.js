import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import EmptyCart from "./EmptyCart";

var img = "carousel_card.jpeg";

function Cart(props) {
  let [cartDetails, setCartDetails] = useState([]);
  var token = localStorage.token;
  useEffect(() => {
    let allcartdetailapi = "https://apibyashu.herokuapp.com/api/cakecart";
    axios({
      url: allcartdetailapi,
      method: "post",
      headers: {
        authtoken: token,
      },
    }).then(
      (response) => {
        setCartDetails(response.data.data);
      },
      (error) => {
        console.log("error from cart details api", error);
      }
    );
  }, []);

  function removeitem(cakeid) {
    var cartremove = {
      cakeid: cakeid,
    };
    console.log(" cake details", cartremove);
    var token = localStorage.token;
    let cartapi = "https://apibyashu.herokuapp.com/api/removecakefromcart";
    axios({
      url: cartapi,
      method: "post",
      data: cartremove,
      headers: {
        authtoken: token,
      },
    }).then(
      (response) => {
        console.log("response from remove item from cart api", response.data);
        //alert(response.data)
        setCartDetails(response.data.data);
        window.location.reload();
      },
      (error) => {
        console.log("error from remove item from cart api", error);
      }
    );
  }

  function getcartdata() {
    props.dispatch({
      type: "SETCARTDATA",
      payload: cartDetails,
    });
    props.history.push("/checkout");
  }

  return (
    <div className="col-sm-12 col-md-10 col-md-offset-1">
      {props.loginstatus ? (
        <table className="table table-hover">
          {cartDetails?.length == 0 ? (
            <EmptyCart />
          ) : (
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th className="text-center">Price</th>
                <th className="text-center">Total</th>
                <th> </th>
              </tr>
            </thead>
          )}
          <tbody>
            {cartDetails?.length > 0 &&
              cartDetails.map((each, index) => {
                return (
                  <tr>
                    <td className="col-sm-8 col-md-6">
                      <div className="media">
                        <a className="thumbnail float-left">
                          {" "}
                          <img
                            className="media-object"
                            src={each.image}
                            style={{ width: "72px", height: "72px" }}
                          />{" "}
                        </a>
                        <div className="media-body">
                          <h5 className="media-heading">
                            {" "}
                            by <a>{each.name}</a>
                          </h5>
                          <h5 className="media-heading">
                            {" "}
                            Weight : <a>{each.weight} kg</a>
                          </h5>
                          <span>Status: </span>
                          <span className="text-warning">
                            <strong>In Stock</strong>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td
                      className="col-sm-1 col-md-1"
                      style={{ textalign: "center" }}
                    >
                      <input
                        type="email"
                        className="form-control"
                        id="quantity"
                        value={each.quantity}
                      />
                    </td>
                    <td className="col-sm-1 col-md-1 text-center">
                      <strong>{each.price}</strong>
                    </td>
                    <td className="col-sm-1 col-md-1 text-center">
                      <strong>{each.pricey}</strong>
                    </td>
                    <td className="col-sm-1 col-md-1">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => removeitem(each.cakeid)}
                      >
                        <span className="fa fa-remove"></span> Remove
                      </button>
                    </td>
                  </tr>
                );
              })}

            {cartDetails?.length > 0 ? (
              <tr>
                <td>
                  <button
                    type="button"
                    onClick={getcartdata}
                    className="btn btn-success"
                  >
                    Checkout <span className="fa fa-play"></span>
                  </button>
                </td>
              </tr>
            ) : (
              <h3>Empty Cart</h3>
            )}
          </tbody>
        </table>
      ) : (
        <Link to="/login">
          <button className="btn btn-warning">Login For Add To Cart</button>
        </Link>
      )}
    </div>
  );
}

Cart = withRouter(Cart);
export default connect(function (state, props) {
  return {
    loginstatus: state?.isloggedin,
    carttt: state?.cartdata,
  };
})(Cart);

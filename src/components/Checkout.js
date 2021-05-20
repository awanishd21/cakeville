import { Route } from "react-router";
import CartSummary from "../components/CartSummary";
import Address from "../components/Address";
import Payment from "../components/Payment";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import "../partials/css/style.css";

function Checkout() {
  var route = useRouteMatch();
  var url = route.url;
  var path = route.path;
  return (
    <div className="row mt-5">
      <div className="col-4 list-group active">
        <Link to={url}>
          <a className="list-group-item list-group-item-action">Cart Summary</a>
        </Link>
        <Link to={url + "/address"}>
          {" "}
          <a className="list-group-item list-group-item-action">Address</a>
        </Link>
        <Link to={url + "/order"}>
          {" "}
          <a className="list-group-item list-group-item-action">Order</a>
        </Link>
        <Link to={url + "/payment"}>
          {" "}
          <a className="list-group-item list-group-item-action">Payment</a>
        </Link>
      </div>

      <div className="col-8">
        <Route exact path={path} component={CartSummary}></Route>
        <Route exact path={path + "/address"} component={Address}></Route>
        <Route exact path={path + "/payment"} component={Payment}></Route>
      </div>
    </div>
  );
}
export default Checkout;

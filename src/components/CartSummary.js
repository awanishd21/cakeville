import { connect } from "react-redux";

function CartSummary(props) {
  let total = 0;
  return (
    <div className="card">
      {props.cart?.length > 0 &&
        props.cart.map((each, index) => {
          return (
            <div className="card">
              <img src={each.image} className="card-img-top c-sum" alt="..." />
              <div className="card-body">
                <h6 className="card-title">{each.name}</h6>
                <p className="card-text">quantity : {each.quantity}</p>
                <p className="card-text">
                  Price : {"$ " + parseInt(each.price)}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default connect(function (state, props) {
  return {
    cart: state?.cartdata,
  };
})(CartSummary);

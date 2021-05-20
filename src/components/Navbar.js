import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function Navbar(props) {
  const history = useHistory();

  var onlinestaus = 0;
  var [query, setQuery] = useState();
  let getQuery = function (event) {
    setQuery(event.target.value);
  };

  let logout = function (event) {
    event.preventDefault();
    props.dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light secondnav">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/">
              {" "}
              <a className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
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
    <nav className="navbar navbar-expand-lg navbar-light pull-right">
      <Link to="/">
        {" "}
        <h1>
          <a className="navbar-brand">CakeVille</a>
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#headerSupportedContent"
        aria-controls="headerSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="headerSupportedContent"
      >
        <ul className="navbar-nav headerlist">
          <li className="nav-item">
            <div className="form-inline">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={getQuery}
              />
              <Link to={`/search?q=${query}`}>
                <button className="btn btn-info">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/cart">
              <button className="btn btn-info">
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
            </Link>
          </li>
          <li>
            <div className="form-inline my-2 my-lg-0">
              {props.loginstatus ? (
                <div></div>
              ) : (
                <Link to="/login">
                  <button className="btn btn-info">Login</button>
                </Link>
              )}
            </div>
          </li>
          {props.loginstatus ? (
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="headerDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {props.children} Hello {props.user}
              </a>
              <div className="dropdown-menu" aria-labelledby="headerDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                {props.loginstatus ? (
                  <a className="dropdown-item" onClick={logout}>
                    Logout
                  </a>
                ) : (
                  <div></div>
                )}
              </div>
            </li>
          ) : (
            <div></div>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default connect(function (state, props) {
  return {
    user: state?.user?.name,
    loginstatus: state?.isloggedin,
  };
})(Header);

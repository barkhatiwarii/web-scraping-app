import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../yash-logo-new.svg";
export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to={"/login"}>
            <img src={logo} alt="Logo" width="80" height="50" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register"}>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

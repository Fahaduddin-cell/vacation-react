import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm scrolling-navbar navbar-dark fixed-top top-nav-collapse ">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <i className="fa fa-seedling text-success"></i> Ultimate Vacations
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#ui-navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="ui-navbar">
            <ul className="navbar-nav ml-auto px-2">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/destination" className="nav-link">
                  Destination
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/form">
                  <button className="btn btn-danger">Book Now</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

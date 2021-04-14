import React from "react";
import { Link } from "react-scroll";
import logo from "../images/logo1.png";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="main" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul>
          <li>
            <Link to="main" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="features" smooth={true} duration={1000}>
              Features
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={1000}>
              Services
            </Link>
          </li>
          <li>
            <Link to="#" smooth={true} duration={1000}>
              Download Resume
            </Link>
          </li>
          <li>
            <Link to="subscribe" smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="#" smooth={true} duration={1000} className="hey">
              You alright Boah
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

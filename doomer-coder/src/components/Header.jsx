import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          It's a <span>ReactJS</span> Website
        </h1>
        <p className="details">
          I can make a website using react js but I have recently started
          playing Red Dead Redemption 2 so this website is going to be about
          that since I am kindof obsessed
        </p>
        <div className="header-btns">
          <a href="#" className="cv-btn">
            Hire Me
          </a>
          <a href="#" className="cv-btn1">
            Resume
          </a>
        </div>
      </div>
      <div className="arrow"></div>
    </div>
  );
}

export default Header;

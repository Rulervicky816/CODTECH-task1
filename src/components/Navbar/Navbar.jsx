import React from "react";
import "../../App.css"
const Navbar = () => {
  return (
    <>
      <div className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000" 
      >
        <div className="left nav_items" ><a href="#home"><h4>Portfolio</h4></a></div>
        <div className="right">
          <a href="#home" className="nav_items">
            Home
          </a>
          <a href="#skills" className="nav_items">
            Skills
          </a>
          <a href="#education" className="nav_items">
            Education
          </a>
          <a href="#contact" className="nav_items">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

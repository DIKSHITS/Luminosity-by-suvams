import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <div className="menu-icon">
          <span></span>
          <span></span>
        </div>
      </div>

      {/* CENTER */}
      <nav className="nav-center">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#portfolio">our Craft</a>
        <a href="#experience">Feedback</a>
        <a href="#journal">FAQ</a>
        <a href="#contact">CONTACT</a>
      </nav>

      {/* RIGHT */}
      <div className="nav-right">
        EN | FR
      </div>
    </header>
  );
};

export default Navbar;
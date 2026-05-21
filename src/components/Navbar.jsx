import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/hero/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scroll ? "scrolled" : ""}`}>

      <div className="nav-left">
        <div
          className={`menu-icon ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="nav-links left-links">
        <a href="/">HOME</a>
        <a href="#lovestories">ABOUT</a>
        <a href="#portfolio">OUR CRAFT</a>
      </div>

      <div className="nav-logo">
        <img src={logo} alt="logo"/>
      </div>

      <div className="nav-links right-links">
        <a href="#feedback">FEEDBACK</a>
        <a href="#FAQ">FAQ</a>
        <a href="#contact">CONTACT</a>
      </div>

     

    
    </header>
  );
};

export default Navbar;
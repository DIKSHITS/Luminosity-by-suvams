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

      <div className="nav-right">
        <button className="book-btn">
          BOOK CONSULTATION
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="mobile-nav">
          <a href="/" onClick={() => setOpen(false)}>HOME</a>
          <a href="#lovestories" onClick={() => setOpen(false)}>ABOUT</a>
          <a href="#portfolio" onClick={() => setOpen(false)}>OUR CRAFT</a>
          <a href="#feedback" onClick={() => setOpen(false)}>FEEDBACK</a>
          <a href="#FAQ" onClick={() => setOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setOpen(false)}>CONTACT</a>
        </nav>

        <div className="mobile-cta">
          <button
            className="book-btn"
            onClick={() => setOpen(false)}
          >
            BOOK CONSULTATION
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
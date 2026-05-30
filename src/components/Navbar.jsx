import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={`navbar ${scroll ? "scrolled" : ""}`}>
        {/* Hamburger */}

        <div
          className={`menu-icon ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Left Links */}

        <div className="nav-links left-links">
       <Link to="/">HOME</Link>
          <a href="#lovestories">ABOUT</a>
          <a href="#portfolio">OUR CRAFT</a>
        </div>

        {/* Logo */}

        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Right Links */}

        <div className="nav-links right-links">
          <a href="#feedback">FEEDBACK</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">CONTACT</a>
        </div>
      </header>

      {/* Mobile Menu */}

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-nav">
          <Link to="/" onClick={closeMenu}>
            HOME
          </Link>

          <a href="#lovestories" onClick={closeMenu}>
            ABOUT
          </a>

          <a href="#portfolio" onClick={closeMenu}>
            OUR CRAFT
          </a>

          <a href="#feedback" onClick={closeMenu}>
            FEEDBACK
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>

          <a href="#contact" onClick={closeMenu}>
            CONTACT
          </a>
        </div>
      </div>

      {open && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
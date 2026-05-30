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
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <header className={`navbar ${scroll ? "scrolled" : ""}`}>
        {/* HAMBURGER MENU */}

        <div
          className={`menu-icon ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* LEFT LINKS */}

        <div className="nav-links left-links">
          <Link to="/">HOME</Link>
          <a href="#lovestories">ABOUT</a>
          <a href="#portfolio">OUR CRAFT</a>
        </div>

        {/* LOGO */}

        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* RIGHT LINKS */}

        <div className="nav-links right-links">
          <a href="#feedback">FEEDBACK</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">CONTACT</a>
        </div>
      </header>

      {/* MOBILE MENU */}

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-nav">
          <Link to="/" onClick={() => setOpen(false)}>
            HOME
          </Link>

        

          <a href="#about" onClick={() => setOpen(false)}>
            ABOUT
          </a>

          <a href="#craft" onClick={() => setOpen(false)}>
            OUR CRAFT
          </a>

          <a href="#feedback" onClick={() => setOpen(false)}>
            FEEDBACK
          </a>

          <a href="#faq" onClick={() => setOpen(false)}>
            FAQ
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
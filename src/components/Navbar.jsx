import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (event, id) => {
    event.preventDefault();
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
    setOpen(false); // ✅ CLOSE MENU AFTER CLICK
  };

  return (
    <header className="navbar">

      {/* LEFT */}
      <div className="nav-left" onClick={() => setOpen(!open)}>
        <div className={`menu-icon ${open ? "active" : ""}`}>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* CENTER */}
      <nav className={`nav-center ${open ? "show" : ""}`}>
        <a href="#hero" onClick={(event) => handleClick(event, "hero")}>HOME</a>
        <a href="#lovestories" onClick={(event) => handleClick(event, "lovestories")}>ABOUT</a>
        <a href="#portfolio" onClick={(event) => handleClick(event, "portfolio")}>OUR CRAFT</a>
        <a href="#feedback" onClick={(event) => handleClick(event, "feedback")}>FEEDBACK</a>
        <a href="#faq" onClick={(event) => handleClick(event, "faq")}>FAQ</a>
        <a href="#contact" onClick={(event) => handleClick(event, "contact")}>CONTACT</a>
      </nav>

      {/* RIGHT */}
      <div className="nav-right"></div>

    </header>
  );
};

export default Navbar;
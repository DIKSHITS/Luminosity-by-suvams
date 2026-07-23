import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // ==========================
  // Navbar Scroll Effect
  // ==========================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        totalHeight > 0
          ? (window.scrollY / totalHeight) * 100
          : 0;

      setScrollProgress(progress);

      const sections = [
        "home",
        "about",
        "portfolio",
        "feedback",
        "faq",
        "contact",
      ];

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // ==========================
  // Disable Body Scroll
  // ==========================

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // ==========================
  // ESC Close
  // ==========================

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", close);

    return () =>
      window.removeEventListener("keydown", close);
  }, []);

  // ==========================
  // Close Menu
  // ==========================

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "portfolio", label: "OUR CRAFT" },
    { id: "feedback", label: "FEEDBACK" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* Scroll Progress */}

      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ================= NAVBAR ================= */}

      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        {/* Brand */}

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <div className="logo-text">
            <h2>Luminosity</h2>
            <span>by Suvam</span>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="navbar-menu">
          {menuItems.map((item) => (
            item.id === "home" ? (
              <Link
                key={item.id}
                to="/"
                className={
                  activeSection === item.id
                    ? "active"
                    : ""
                }
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={
                  activeSection === item.id
                    ? "active"
                    : ""
                }
              >
                {item.label}
              </a>
            )
          ))}

          <a
            href="#contact"
            className="book-btn"
          >
            BOOK NOW
          </a>
        </nav>

        {/* Hamburger */}

        <button
          className={`hamburger ${
            menuOpen ? "active" : ""
          }`}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`mobile-menu ${
          menuOpen ? "show" : ""
        }`}
      >
        <div className="mobile-header">
          <div className="logo-text mobile-logo-text">
            <h2>Luminosity</h2>
            <span>by Suvam</span>
          </div>

          <button
            className="close-menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <nav className="mobile-links">
          {menuItems.map((item, index) => (
            item.id === "home" ? (
              <Link
                key={item.id}
                to="/"
                onClick={closeMenu}
                style={{
                  animationDelay: `${index * 0.08}s`,
                }}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                style={{
                  animationDelay: `${index * 0.08}s`,
                }}
              >
                {item.label}
              </a>
            )
          ))}

          <a
            href="#contact"
            className="mobile-book"
            onClick={closeMenu}
          >
            BOOK NOW
          </a>
        </nav>

        <div className="mobile-social">
          <p>Luxury Wedding Photography</p>

          <span>
            Crafted • Captured • Cherished
          </span>
        </div>
      </div>

      {/* Overlay */}

      <div
        className={`menu-overlay ${
          menuOpen ? "active" : ""
        }`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Navbar;
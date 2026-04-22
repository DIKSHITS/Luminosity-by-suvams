import React from "react";
import "../styles/footer.css";
import { FaInstagram, FaYoutube, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* SOCIAL ICONS */}
      <div className="footer-icons">
        <a href="https://www.instagram.com/luminosity_by_suvam?igsh=MXB2OWEzOXR1ODJudg==" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://www.youtube.com/@luminositybysuvam" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
        <a href="https://wa.me/919123938200" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
      </div>

      {/* LINE */}
      <div className="footer-line"></div>

      {/* TEXT */}
      <p className="footer-text">
        Luminosity by Suvam © 2026
      </p>

    </footer>
  );
};

export default Footer;
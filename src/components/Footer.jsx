import React from "react";
import "../styles/footer.css";

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaWhatsapp,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">

      {/* Background Effects */}

      <div className="footer-glow"></div>

      <div className="footer-circle circle-one"></div>

      <div className="footer-circle circle-two"></div>

      {/* ================= TOP ================= */}

      <div className="footer-container">

        <div className="footer-brand">

          <span className="footer-subtitle">
            LUXURY WEDDING PHOTOGRAPHY
          </span>

          <h2>
            Luminosity
            <br />
            <span>by Suvam</span>
          </h2>

          <div className="footer-divider"></div>

          <p>
            We don't simply capture weddings —
            we preserve emotions, laughter,
            tears, traditions and timeless love
            stories through elegant cinematic
            photography and films.
          </p>

        </div>

        {/* ================= SOCIAL ================= */}

        <div className="footer-social">

          <a
            href="https://www.instagram.com/luminosity_by_suvam?utm_source=qr&igsh=cnFoN25qaGY2MTdq"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.youtube.com/@LuminositybySuvam"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://wa.me/6289688420"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

        </div>

        {/* ================= CTA ================= */}

        <div className="footer-cta">

          <h3>
            Let's Create
            <br />
            Your Story
          </h3>

          <p>
            We'd love to hear your vision and
            turn your wedding into timeless
            memories that last forever.
          </p>

          <a
            href="#contact"
            className="footer-btn"
          >
            Book Your Wedding

            <FaArrowRight />
          </a>

        </div>

      </div>

      {/* ================= STATS ================= */}

      <div className="footer-stats">

        <div className="stat">

          <h3>500+</h3>

          <span>Weddings</span>

        </div>

        <div className="stat">

          <h3>1200+</h3>

          <span>Portrait Sessions</span>

        </div>

        <div className="stat">

          <h3>100%</h3>

          <span>Authentic Moments</span>

        </div>

      </div>

      {/* ================= DIVIDER ================= */}

      <div className="footer-line"></div>

      {/* ================= BOTTOM ================= */}

      <div className="footer-bottom">

        <p>

          © 2026

          <span> Luminosity by Suvam.</span>

          All Rights Reserved.

        </p>

        <p className="developer">

          Designed & Developed with

          <FaHeart className="heart" />

          by

          <span> Dikshit Raj</span>

        </p>

      </div>

    </footer>
  );
};

export default Footer;
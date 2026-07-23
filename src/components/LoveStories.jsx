import React from "react";
import { Link } from "react-router-dom";
import "../styles/loveStories.css";

import img26 from "../assets/hero/img26.jpg";

const LoveStories = () => {
  return (
    <section id="about" className="love">

      {/* Decorative Background */}
      <div className="love-bg-glow"></div>
      <div className="love-bg-circle love-circle-one"></div>
      <div className="love-bg-circle love-circle-two"></div>

      <div className="love-container">

        {/* ================= IMAGE ================= */}
        <div className="love-image-wrapper">

          <div className="image-border"></div>

          <div className="love-image">

            <img
              src={img26}
              alt="Luminosity by Suvam Wedding Photography"
            />

          </div>

          <div className="experience-badge">

            <span className="badge-number">5+</span>

            <span className="badge-text">
              Years of
              <br />
              Experience
            </span>

          </div>

        </div>

        {/* ================= CONTENT ================= */}

        <div className="love-content">

          <span className="love-subtitle">
            ABOUT LUMINOSITY BY SUVAM
          </span>

          <h2 className="love-title">
            Crafting Timeless
            <br />
            Wedding Stories
          </h2>

          <div className="love-divider"></div>

          <p>
            Luminosity by Suvam is more than wedding photography. We create
            timeless visual stories that preserve emotions, relationships, and
            every unforgettable moment with artistic elegance.
          </p>

          <p>
            With over five years of experience, our journey began through street
            photography, where we learned to notice authentic emotions, natural
            light, and meaningful human connections.
          </p>

          <p>
            Today, every wedding is documented with a cinematic approach,
            blending luxury editorial aesthetics with genuine storytelling so
            your memories remain beautiful for generations.
          </p>

          {/* FEATURES */}

          <div className="love-features">

            <div className="feature-card">

              <h3>500+</h3>

              <span>Events Covered</span>

            </div>

            <div className="feature-card">

              <h3>100%</h3>

              <span>Authentic Moments</span>

            </div>

            <div className="feature-card">

              <h3>Luxury</h3>

              <span>Editorial Style</span>

            </div>

          </div>

          {/* BUTTONS */}

          <div className="love-buttons">

            <a href="#contact" className="love-btn-primary">
              BOOK YOUR DATE
            </a>

             <Link
            to="/collections"
            className="hero-btn"
          >
            Explore Collection
          </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default LoveStories;
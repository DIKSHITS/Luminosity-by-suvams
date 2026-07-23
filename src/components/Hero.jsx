import React, { useEffect, useState } from "react";

import "../styles/hero.css";

import img1 from "../assets/hero/img1.jpg";
import img2 from "../assets/hero/img30.jpg";

const images = [img1, img2];

const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="hero" id="home">

      {/* ================= Background Images ================= */}

      <div className="hero-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Luxury Wedding Photography"
            className={`hero-image ${
              active === index ? "active" : ""
            }`}
          />
        ))}
      </div>

      {/* ================= Overlay ================= */}

      <div className="hero-overlay"></div>

      {/* ================= Decorative Shapes ================= */}

      <div className="hero-circle hero-circle-1"></div>
      <div className="hero-circle hero-circle-2"></div>

      {/* ================= Content ================= */}


      {/* ================= Bottom Bar ================= */}

      <div className="hero-bottom">

        <div className="hero-count">
          <span>
            {String(active + 1).padStart(2, "0")}
          </span>

          <div className="count-line"></div>

          <span>
            {String(images.length).padStart(2, "0")}
          </span>
        </div>

        <div className="scroll-indicator">

          <span></span>

          <p>Scroll</p>

        </div>

      </div>

    </section>
  );
};

export default Hero;
import React, { useEffect, useState } from "react";
import "../styles/hero.css";

import img1 from "../assets/hero/img1.jpg";
import img2 from "../assets/hero/img2.jpg";
import img3 from "../assets/hero/img30.jpg";

const images = [img1, img2, img3];

const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      {/* Background Full Image */}
      <div className="hero-bg">
        <img src={images[active]} alt="Luxury fashion collection showcase" />
      </div>

      {/* Overlay */}
      <div className="overlay" aria-hidden="true"></div>

      {/* Hero Content */}
      <div className="hero-left">
        <h1>
          Crafted<br />   
          Captured cherished
        </h1>

        <p>
          Luxury fashion crafted for your unforgettable moments.
        </p>

        <button className="hero-btn" aria-label="Explore our luxury fashion collection">
          Explore Collection →
        </button>

      </div>

    </section>
  );
};

export default Hero;
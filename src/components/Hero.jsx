import React, { useEffect, useState } from "react";
import "../styles/hero.css";

import logo from "../assets/hero/logo.png";

import img1 from "../assets/hero/img1.jpg";
import img2 from "../assets/hero/img2.jpg";
import img3 from "../assets/hero/img3.jpg";

const images = [img1, img2, img3];

const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Top Center Logo */}
      <div className="hero-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>

      {/* Left Content */}
      <div className="hero-left">
        

        <h1>
          Redefine <br /> Your Style
        </h1>

       

        <button className="hero-btn">Explore Collection</button>
      </div>

      {/* Right Content */}
      <div className="hero-right">
        <div className="main-image">
          <img src={images[active]} alt="" />
        </div>

        <div className="floating-card top-card">
          <img src={images[(active + 1) % images.length]} alt="" />
        </div>

        <div className="floating-card bottom-card">
          <img src={images[(active + 2) % images.length]} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
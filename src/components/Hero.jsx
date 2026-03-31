import React, { useEffect, useState } from "react";
import "../styles/hero.css";

/* IMPORT YOUR LOGO */
import logo from "../assets/hero/logo.png";

/* IMPORT YOUR IMAGES */
import img1 from "../assets/hero/img1.jpg";
import img2 from "../assets/hero/img2.jpg";
import img3 from "../assets/hero/img3.jpg";
import img4 from "../assets/hero/img4.jpg";
import img5 from "../assets/hero/img5.jpg";

import img6 from "../assets/hero/img6.jpg";
import img7 from "../assets/hero/img7.jpg";
import img8 from "../assets/hero/img8.jpg";
import img9 from "../assets/hero/img9.jpg";
import img10 from "../assets/hero/img10.jpg";

/* IMAGE COLLECTIONS */
const collections = [
  [img1, img2, img3, img5, img4],
  [img6, img7, img8, img10, img9],
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % collections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const images = collections[index];

  return (
    <section id="hero" className="section hero">
      <div className="hero-content">

        {/* LOGO */}
        <div className="logo-wrapper fade-down">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* COLLAGE */}
        <div key={index} className="collage slide-transition">

          {/* LEFT */}
          <div className="img left-img fade-up delay-1">
            <img src={images[0]} alt="" />
          </div>

          {/* CENTER */}
          <img src={images[1]} className="img center-img fade-up delay-2" alt="" />

          {/* TOP RIGHT */}
          <img src={images[2]} className="img top-right fade-up delay-3" alt="" />

          {/* RIGHT TALL */}
          <div className="img right-tall fade-up delay-4">
            <img src={images[3]} alt="" />
          </div>

          {/* BOTTOM RIGHT */}
          <img src={images[4]} className="img bottom-right fade-up delay-5" alt="" />

        </div>
      </div>
    </section>
  );
};

export default Hero;
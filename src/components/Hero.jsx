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

/* SINGLE COLLECTION */
const initialImages = [img1, img2, img3, img4, img5];

const Hero = () => {
  const [images, setImages] = useState(initialImages);

  /* AUTO SLIDE (ROTATE IMAGES) */
  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prev) => {
        const newArr = [...prev];
        const first = newArr.shift(); // remove first
        newArr.push(first); // add to end
        return newArr;
      });
    }, 4000); // change every 4 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="section hero">
      <div className="hero-content">

        {/* LOGO */}
        <div className="logo-wrapper fade-down">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* COLLAGE */}
        <div className="collage">

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
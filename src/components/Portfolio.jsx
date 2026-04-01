import React, { useEffect, useState } from "react";
import "../styles/portfolio.css";

/* IMPORT YOUR IMAGES */
import img13 from "../assets/hero/img13.jpg";
import img14 from "../assets/hero/img14.jpg";
import img15 from "../assets/hero/img15.jpg";
import img16 from "../assets/hero/img16.jpg";
import img17 from "../assets/hero/img17.jpg";
import img18 from "../assets/hero/img18.jpg";
import img19 from "../assets/hero/img19.jpg";
import img20 from "../assets/hero/img20.jpg";
import img21 from "../assets/hero/img21.jpg";
import img22 from "../assets/hero/img22.jpg";
import img23 from "../assets/hero/img23.jpg";
import img24 from "../assets/hero/img24.jpg";
import img25 from "../assets/hero/img25.jpg";
import img27 from "../assets/hero/img27.jpg";
import img28 from "../assets/hero/img28.jpg";

const images = [
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img27,
  img28,
];

const Portfolio = () => {
  const [index, setIndex] = useState(2);

  /* AUTO SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  const get = (i) => images[(index + i + images.length) % images.length];

  return (
    <section id="portfolio" className="section">

      {/* HEADER */}
      <div className="portfolio-header">
        <h2>Our Craft</h2>
        <p>DISCOVER THE STORIES</p>
      </div>

      {/* NAVIGATION */}
      <div className="nav-text left" onClick={prev}>
        <span className="line"></span>
        <span>Prev</span>
      </div>

      <div className="nav-text right" onClick={next}>
        <span>Next</span>
        <span className="line"></span>
      </div>

      {/* SLIDER */}
      <div className="portfolio-track">
        <img src={get(-1)} className="side left-img" alt="left" />
        <img src={get(0)} className="center" alt="center" />
        <img src={get(1)} className="side right-img" alt="right" />
      </div>

    </section>
  );
};

export default Portfolio;
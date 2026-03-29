import React, { useEffect, useState } from "react";
import "../styles/portfolio.css";

const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
];

const Portfolio = () => {
  const [index, setIndex] = useState(2);

  // AUTO SLIDE
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

      {/* TITLE */}
      <div className="portfolio-header">
        <h2>Our Craft</h2>
        <p>DISCOVER THE STORIES</p>
      </div>

      {/* NAV LEFT */}
      <div className="nav-text left" onClick={prev}>
        <span className="line"></span>
        <span>Prev</span>
      </div>

      {/* NAV RIGHT */}
      <div className="nav-text right" onClick={next}>
        <span>Next</span>
        <span className="line"></span>
      </div>

      {/* SLIDER */}
      <div className="portfolio-track">
        <img src={get(-1)} className="side left-img" alt="" />
        <img src={get(0)} className="center" alt="" />
        <img src={get(1)} className="side right-img" alt="" />
      </div>

    </section>
  );
};

export default Portfolio;
import React, { useEffect, useState } from "react";
import "../styles/portfolio.css";

/* ================= IMAGES ================= */

import img13 from "../assets/hero/img13.jpg";
import img14 from "../assets/hero/img14.jpg";
import img16 from "../assets/hero/img16.jpg";
import img17 from "../assets/hero/img17.jpg";
import img18 from "../assets/hero/img18.jpg";
import img21 from "../assets/hero/img21.jpg";
import img22 from "../assets/hero/img22.jpg";
import img24 from "../assets/hero/img24.jpg";
import img25 from "../assets/hero/img25.jpg";
import img27 from "../assets/hero/img27.jpg";
import img28 from "../assets/hero/img28.jpg";

/* ================= GALLERY ================= */

const gallery = [
  {
    image: img13,
    title: "Wedding Ceremony",
    category: "Traditional Wedding",
  },
  {
    image: img14,
    title: "Couple Portrait",
    category: "Luxury Portrait",
  },
  {
    image: img16,
    title: "Haldi Celebration",
    category: "Pre Wedding",
  },
  {
    image: img17,
    title: "Bride Editorial",
    category: "Editorial",
  },
  {
    image: img18,
    title: "Royal Couple",
    category: "Destination",
  },
  {
    image: img21,
    title: "Wedding Details",
    category: "Luxury Decor",
  },
  {
    image: img22,
    title: "Golden Moments",
    category: "Storytelling",
  },
  {
    image: img24,
    title: "Bridal Portrait",
    category: "Fine Art",
  },
  {
    image: img25,
    title: "Reception Night",
    category: "Wedding Reception",
  },
  {
    image: img27,
    title: "Candid Emotion",
    category: "Candid",
  },
  {
    image: img28,
    title: "Forever Together",
    category: "Signature Collection",
  },
];

const Portfolio = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % gallery.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const getImage = (offset) =>
    gallery[(current + offset + gallery.length) % gallery.length];

  return (
    <section className="portfolio-section" id="portfolio">
      {/* Decorative Background */}

      <div className="portfolio-glow"></div>

      <div className="portfolio-circle circle-one"></div>

      <div className="portfolio-circle circle-two"></div>

      {/* Heading */}

      <div className="portfolio-heading">

        <span>OUR CRAFT</span>

        <h2>
          Crafting
          <br />
          Timeless Memories
        </h2>

        <div className="portfolio-line"></div>

        <p>
          Every celebration has its own rhythm, emotions, and unforgettable
          moments. We transform those fleeting memories into timeless visual
          stories with a cinematic and editorial approach.
        </p>

      </div>

      {/* Gallery */}

      <div className="portfolio-slider">

        <button
          className="slider-btn left-btn"
          onClick={prevSlide}
          aria-label="Previous"
        >
          &#8592;
        </button>

        {/* Left Image */}

        <div className="gallery-card side-card">

          <img
            src={getImage(-1).image}
            alt={getImage(-1).title}
          />

        </div>

        {/* Center Image */}

        <div className="gallery-card active-card">

          <img
            src={getImage(0).image}
            alt={getImage(0).title}
          />

          <div className="gallery-overlay">

            <span>{getImage(0).category}</span>

            <h3>{getImage(0).title}</h3>

            <a href="#contact">
              Book Your Story
            </a>

          </div>

        </div>

        {/* Right Image */}

        <div className="gallery-card side-card">

          <img
            src={getImage(1).image}
            alt={getImage(1).title}
          />

        </div>

        <button
          className="slider-btn right-btn"
          onClick={nextSlide}
          aria-label="Next"
        >
          &#8594;
        </button>

      </div>

      {/* Bottom Stats */}

      <div className="portfolio-stats">

        <div className="stat-box">

          <h3>500+</h3>

          <p>Weddings Captured</p>

        </div>

        <div className="stat-box">

          <h3>1200+</h3>

          <p>Editorial Portraits</p>

        </div>

        <div className="stat-box">

          <h3>100%</h3>

          <p>Authentic Emotions</p>

        </div>

      </div>

      {/* Bottom CTA */}

      <div className="portfolio-cta">

        <a href="#gallery" className="portfolio-btn">
          Explore Complete Gallery
        </a>

      </div>

    </section>
  );
};

export default Portfolio;
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/CollectionSection.css";

/* =========================
   GALLERY IMAGES
========================= */

import img2 from "../assets/hero/img2.jpg";
import img3 from "../assets/hero/img3.jpg";
import img5 from "../assets/hero/img5.jpg";
import img6 from "../assets/hero/img6.jpg";
import img7 from "../assets/hero/img7.jpg";
import img8 from "../assets/hero/img8.jpg";
import img9 from "../assets/hero/img9.jpg";
import img10 from "../assets/hero/img10.jpg";
import img11 from "../assets/hero/img11.jpg";
import img12 from "../assets/hero/img12.jpg";
import img13 from "../assets/hero/img13.jpg";
import img14 from "../assets/hero/img14.jpg";
import img15 from "../assets/hero/img15.jpg";
import img16 from "../assets/hero/img16.jpg";
import img17 from "../assets/hero/img17.jpg";
import img18 from "../assets/hero/img18.jpg";
import img21 from "../assets/hero/img21.jpg";
import img22 from "../assets/hero/img22.jpg";
import img24 from "../assets/hero/img24.jpg";
import img25 from "../assets/hero/img25.jpg";
import img26 from "../assets/hero/img26.jpg";
import img27 from "../assets/hero/img27.jpg";

/* =========================
   IMAGE ARRAY
========================= */

const images = [
  img2,
  img3,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img21,
  img22,
  img24,
  img25,
  img26,
  img27,
];

/* =========================
   GALLERY DATA
========================= */

const galleryItems = images.map((image, index) => ({
  id: index + 1,
  image,
  title: `Wedding Story ${index + 1}`,
  category:
    index % 3 === 0
      ? "Destination Wedding"
      : index % 3 === 1
      ? "Pre Wedding"
      : "Luxury Portrait",
}));

/* =========================
   COMPONENT
========================= */

const CollectionSection = () => {
  const heroRef = useRef(null);

  const [scrollY, setScrollY] = useState(0);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
    <>
      <Navbar />

      {/* =====================================================
          CINEMATIC HERO
      ===================================================== */}

      <section className="collections">

        <section
          className="cinema-banner"
          ref={heroRef}
        >
          {/* Background Video */}

          <iframe
            src="https://www.youtube.com/embed/Y9li4I7MvLE?autoplay=1&mute=1&loop=1&playlist=Y9li4I7MvLE&controls=0&showinfo=0&modestbranding=1&rel=0"
            title="Luxury Wedding Film"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />

          {/* Dark Overlay */}

          <div className="hero-overlay"></div>

          {/* Gradient Overlay */}

          <div className="hero-gradient"></div>

          {/* Luxury Glow */}

          <div className="hero-glow hero-glow-1"></div>
          <div className="hero-glow hero-glow-2"></div>

          {/* Floating Particles */}

          <span className="particle p1"></span>
          <span className="particle p2"></span>
          <span className="particle p3"></span>
          <span className="particle p4"></span>
          <span className="particle p5"></span>
          <span className="particle p6"></span>

          {/* Hero Content */}

         

          {/* Scroll Indicator */}

          <div className="scroll-indicator">

            <span></span>

            <p>Scroll</p>

          </div>

        </section>

                {/* =====================================================
            EDITORIAL INTRO
        ===================================================== */}

        <section className="editorial-section">

          <div className="section-header">

            <span className="section-tag">
              OUR COLLECTIONS
            </span>

            <h2>
              Every Frame Tells
              <br />
              A Beautiful Story
            </h2>

            <div className="gold-divider"></div>

            <p>
              Weddings are not simply photographed—they are
              experienced. Every smile, every glance, every
              joyful tear becomes a timeless memory preserved
              with artistic vision and cinematic elegance.
              Our collections celebrate authentic emotions,
              luxurious details, and unforgettable moments.
            </p>

          </div>

          {/* ======================
              LUXURY STATISTICS
          ====================== */}

          <div className="stats-grid">

            <div className="stat-card">
              <h3>500+</h3>
              <span>Wedding Stories</span>
            </div>

            <div className="stat-card">
              <h3>8+</h3>
              <span>Years Experience</span>
            </div>

            <div className="stat-card">
              <h3>25+</h3>
              <span>Destination Weddings</span>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <span>Happy Couples</span>
            </div>

          </div>

          {/* ======================
              FEATURE HIGHLIGHTS
          ====================== */}

          <div className="feature-grid">

            <div className="feature-card">

              <div className="feature-icon">
                ✨
              </div>

              <h4>Cinematic Vision</h4>

              <p>
                Every wedding is captured with a storytelling
                approach that transforms moments into timeless
                cinematic memories.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                💍
              </div>

              <h4>Luxury Experience</h4>

              <p>
                From intimate ceremonies to grand destination
                celebrations, every detail is documented with
                elegance and sophistication.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                ❤️
              </div>

              <h4>Authentic Emotions</h4>

              <p>
                Genuine laughter, heartfelt tears, and priceless
                moments become heirlooms for generations to come.
              </p>

            </div>

          </div>

          {/* Decorative Glow Elements */}

          <div className="decor-circle decor-one"></div>
          <div className="decor-circle decor-two"></div>

        </section>

        {/* =====================================================
            GALLERY STARTS HERE (PART 3)
        ===================================================== */}

        <section
          className="gallery-section"
          id="gallery"
        >
                  {/* ==========================================
              LUXURY MASONRY GALLERY
          ========================================== */}

          <div className="gallery-grid">

            {galleryItems.map((item, index) => (

              <div
                key={item.id}
                className={`gallery-card ${
                  index % 5 === 0 ? "gallery-tall" : ""
                } ${index % 7 === 0 ? "gallery-wide" : ""}`}
                onClick={() => setActiveImage(item)}
              >
                {/* Image */}

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                {/* Shine Effect */}

                <span className="card-shine"></span>

                {/* Premium Overlay */}

                <div className="gallery-overlay">

                  <span className="gallery-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <p>
                    Capturing timeless emotions with elegance,
                    romance and cinematic storytelling.
                  </p>

                  <button className="view-btn">
                    View Story
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* ==========================================
              IMAGE PREVIEW MODAL
          ========================================== */}

          {activeImage && (

            <div
              className="gallery-modal"
              onClick={() => setActiveImage(null)}
            >

              <div
                className="gallery-modal-content"
                onClick={(e) => e.stopPropagation()}
              >

                <button
                  className="close-modal"
                  onClick={() => setActiveImage(null)}
                >
                  ×
                </button>

                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                />

                <div className="modal-info">

                  <span>{activeImage.category}</span>

                  <h2>{activeImage.title}</h2>

                  <p>
                    Every photograph is more than just a frame—
                    it is a memory preserved forever, celebrating
                    love, joy and the emotions that make every
                    wedding unique.
                  </p>

                </div>

              </div>

            </div>

          )}

        </section>

                {/* =====================================================
            LUXURY EXPERIENCE
        ===================================================== */}

        <section className="experience-section">

          <div className="experience-bg"></div>

          <div className="experience-content">

            <span className="section-tag">
              WHY CHOOSE US
            </span>

            <h2>
              More Than Photography,
              <br />
              We Preserve Emotions
            </h2>

            <div className="gold-divider"></div>

            <p>
              Every wedding deserves to be remembered through
              timeless imagery. Our creative approach combines
              editorial elegance, cinematic storytelling and
              genuine emotions to create photographs that remain
              beautiful for generations.
            </p>

          </div>

          {/* ============================
              EXPERIENCE CARDS
          ============================ */}

          <div className="experience-grid">

            <div className="experience-card">

              <span className="exp-number">
                01
              </span>

              <h3>Editorial Style</h3>

              <p>
                Magazine-inspired compositions with luxurious
                lighting and artistic direction.
              </p>

            </div>

            <div className="experience-card">

              <span className="exp-number">
                02
              </span>

              <h3>Natural Emotions</h3>

              <p>
                Authentic laughter, heartfelt tears and candid
                moments captured beautifully.
              </p>

            </div>

            <div className="experience-card">

              <span className="exp-number">
                03
              </span>

              <h3>Premium Editing</h3>

              <p>
                Every image is professionally color graded with
                elegant tones and timeless finishing.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            FEATURED QUOTE
        ===================================================== */}

        <section className="quote-section">

          <div className="quote-box">

            <span className="quote-icon">
              “
            </span>

            <h2>
              Love is composed of a single soul
              inhabiting two hearts.
            </h2>

            <p>
              Every wedding album is a story that deserves to be
              told with beauty, elegance and unforgettable emotion.
            </p>

          </div>

        </section>

        {/* =====================================================
            CALL TO ACTION
        ===================================================== */}

        <section
          className="collections-cta"
          id="contact"
        >

          <div className="cta-glow"></div>

          <div className="cta-content">

            <span className="section-tag">
              LET'S CREATE MAGIC
            </span>

            <h2>
              Your Dream Wedding
              <br />
              Begins Here
            </h2>

            <p>
              From intimate ceremonies to grand destination
              celebrations, let's create timeless memories that
              you'll cherish forever.
            </p>

            <div className="cta-buttons">

              <a
                href="/contact"
                className="hero-btn primary-btn"
              >
                Book Now
              </a>

              <a
                href="/portfolio"
                className="hero-btn secondary-btn"
              >
                View Portfolio
              </a>

            </div>

          </div>

        </section>

               {/* =====================================================
            BACK TO TOP BUTTON
        ===================================================== */}

        <button
          className={`back-to-top ${
            scrollY > 400 ? "show" : ""
          }`}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to Top"
        >
          ↑
        </button>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </>
  );
};

export default CollectionSection;
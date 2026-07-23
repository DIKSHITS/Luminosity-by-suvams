import React, { useEffect, useState } from "react";
import "../styles/feedback.css";

/* ================= IMAGES ================= */

import img1 from "../assets/feedback/img1.jpg";
import img2 from "../assets/feedback/img2.jpg";

/* ================= TESTIMONIAL DATA ================= */

const testimonials = [
  {
    id: 1,
    image: img1,
    name: "Akash & Anwesha",
    event: "Engagement Ceremony",
    rating: 5,
    review:
      "Suvam and his team beautifully captured our engagement, making every emotion feel timeless. Their creativity, patience and storytelling transformed our special day into memories that we'll cherish forever.",
  },

  {
    id: 2,
    image: img2,
    name: "Simran & Saiyam",
    event: "Wedding Celebration",
    rating: 5,
    review:
      "We honestly couldn't have asked for better wedding photographers. They made us feel completely comfortable throughout the day, and every photograph reflects genuine emotions. Even after the wedding, their support and dedication were incredible. They didn't just document our wedding—they became part of our journey.",
  },
];

const Feedback = () => {
  const [current, setCurrent] = useState(0);

  /* ================= AUTO SLIDER ================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  /* ================= CONTROLS ================= */

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const item = testimonials[current];

  return (
    <section className="feedback-section" id="feedback">
      {/* Background Effects */}

      <div className="feedback-glow"></div>

      <div className="feedback-circle circle-one"></div>

      <div className="feedback-circle circle-two"></div>

      {/* Heading */}

      <div className="feedback-heading">
        <span>CLIENT LOVE</span>

        <h2>
          Words That
          <br />
          Inspire Us
        </h2>

        <div className="feedback-line"></div>

        <p>
          Every smile, every blessing and every heartfelt review motivates us
          to preserve love stories with honesty, elegance and timeless beauty.
        </p>
      </div>

      {/* Slider */}

      <div className="feedback-container">
        {/* Previous */}

        <button
          className="feedback-arrow left-arrow"
          onClick={prevSlide}
          aria-label="Previous Review"
        >
          &#8592;
        </button>

        {/* Card */}

        <div className="feedback-card">
          {/* Image */}

          <div className="feedback-image">
            <img src={item.image} alt={item.name} />
          </div>

          {/* Content */}

          <div className="feedback-content">
            <div className="quote-icon">“</div>

            <span className="feedback-event">
              {item.event}
            </span>

            <p className="feedback-review">
              {item.review}
            </p>

            {/* Rating */}

            <div className="feedback-stars">
              {[...Array(item.rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Author */}

            <h3>{item.name}</h3>

            <small>Verified Couple</small>
          </div>
        </div>

        {/* Next */}

        <button
          className="feedback-arrow right-arrow"
          onClick={nextSlide}
          aria-label="Next Review"
        >
          &#8594;
        </button>
      </div>

      {/* Bottom Progress */}

      <div className="feedback-bottom">
        <div className="feedback-progress">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={
                i === current
                  ? "progress-dot active"
                  : "progress-dot"
              }
              onClick={() => setCurrent(i)}
            ></span>
          ))}
        </div>

        <div className="feedback-count">
          0{current + 1}
          <span>
            /0{testimonials.length}
          </span>
        </div>
      </div>

      {/* CTA */}

      <div className="feedback-cta">
        <a href="#contact" className="feedback-btn">
          Book Your Wedding Story
        </a>
      </div>
    </section>
  );
};

export default Feedback;
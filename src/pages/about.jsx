import React, { useEffect } from "react";
import "./about.css";
import img26 from "../assets/hero/img26.jpg";

const About = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="about-page">

      {/* HEADER */}
      <div className="about-header fade-in">
        <h1>Luminosity</h1>
        <p className="sub">by Suvam</p>
      </div>

      {/* INTRO */}
      <div className="about-intro fade-in delay-1">
        <p className="fancy-sub">
          capturing moments as they truly are.
        </p>
      </div>

      {/* CONTENT */}
      <div className="about-content">

        {/* IMAGE */}
        <div className="about-img fade-in">
          <img src={img26} alt="Suvam" />
        </div>

        {/* TEXT */}
        <div className="about-text fade-in delay-2">
          <h2>About Suvam</h2>

          <p>
            It began in the streets of Kolkata, West Bengal—capturing life as it unfolded.
          </p>

          <p>
            For over five years, photography has shaped the way I see the world.
            Street photography taught me patience—the art of observing, waiting,
            and finding meaning in the unnoticed.
          </p>

          <p>
            That perspective slowly evolved into documenting weddings—
            where every moment carries depth, every glance holds a story,
            and every frame becomes something to hold on to forever.
          </p>

          <p>
            What started as capturing strangers on the streets
            turned into preserving the most intimate and heartfelt moments of people’s lives.
          </p>

          <p>
            Today, Luminosity by Suvam reflects that journey—
            where raw, real moments meet refined storytelling,
            and every story is told with intention.
          </p>
        </div>

      </div>

    </section>
  );
};

export default About;
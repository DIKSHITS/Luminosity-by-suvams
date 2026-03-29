import React, { useEffect } from "react";
import "./about.css";

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
        <h1>LUMINOSITY</h1>
        <p className="sub">by Suvam</p>
      </div>

      {/* CONTENT */}
      <div className="about-content">

        {/* IMAGE */}
        <div className="about-img fade-in">
          <img
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80"
            alt="Suvam"
          />
        </div>

        {/* TEXT */}
        <div className="about-text fade-in delay-1">
          <h2>About Suvam</h2>

          <p>
            It began in the streets of Kolkata, West Bengal—capturing life as it unfolded.
          </p>

          <p>
            For over five years, photography has shaped the way I see the world. 
            Street photography taught me to observe, to wait, and to find meaning in the unnoticed.
          </p>

          <p>
            Over time, that vision evolved into documenting weddings—where every moment carries depth,
            every glance holds a story, and every frame becomes a memory.
          </p>

          <p>
            Today, Luminosity by Suvam reflects that journey—where raw, real moments meet refined storytelling.
          </p>
        </div>

      </div>

    </section>
  );
};

export default About;
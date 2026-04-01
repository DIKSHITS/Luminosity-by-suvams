import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loveStories.css";

const LoveStories = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section id="lovestories" className="love">

      <div className="love-wrapper">

        {/* LEFT */}
        <div className="love-left fade-in">
          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80"
            alt="love story"
          />
          <p>
            With roots in fashion photography and cinematic storytelling,
            every frame is crafted to feel timeless, emotional, and deeply personal.
          </p>
        </div>

        {/* CENTER */}
        <div className="love-center fade-in delay-1">
          <img
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80"
            alt="couple"
          />
        </div>

        {/* RIGHT */}
        <div className="love-right fade-in delay-2">
          <h2 className="brand-title">Luminosity</h2>

          <p className="tag">
            BY SUVAM <br />
            WEDDING PHOTOGRAPHER
          </p>

          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80"
            alt="wedding"
          />
        </div>
      </div>

      <div className="love-btn-wrap fade-in delay-3">
        <button onClick={() => navigate("/about")}>
          GET TO KNOW SUVAM
        </button>
      </div>

    </section>
  );
};

export default LoveStories;
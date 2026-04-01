import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loveStories.css";

/* IMPORT YOUR IMAGES */
import img11 from "../assets/hero/img11.jpg";
import img12 from "../assets/hero/img12.jpg";
import img13 from "../assets/hero/img13.jpg";

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
          <img src={img11} alt="love story" />
          <p>
            With roots in fashion photography and cinematic storytelling,
            every frame is crafted to feel timeless, emotional, and deeply personal.
          </p>
        </div>

        {/* CENTER */}
        <div className="love-center fade-in delay-1">
          <img src={img12} alt="couple" />
        </div>

        {/* RIGHT */}
        <div className="love-right fade-in delay-2">
          <h2 className="brand-title">Luminosity</h2>

          <p className="tag">
            BY SUVAM <br />
            WEDDING PHOTOGRAPHER
          </p>

          <img src={img13} alt="wedding" />
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
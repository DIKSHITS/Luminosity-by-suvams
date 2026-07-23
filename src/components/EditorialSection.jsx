import React from "react";
import "../styles/editorial.css";

const EditorialSection = () => {
  return (
    <section className="editorial">

      {/* Decorative Glow */}
      <div className="editorial-glow"></div>

      <div className="editorial-content">

        <span className="editorial-subtitle">
          LUXURY WEDDING EXPERIENCE
        </span>

        <h1 className="editorial-script">
          <span className="first-letter">A</span>
          modern approach to an age old tradition
        </h1>

        <p className="editorial-text">
          We create refined editorial imagery that celebrates every heartfelt
          emotion, every meaningful detail, and every beautifully imperfect
          in-between moment. Every frame is crafted with timeless elegance,
          cinematic storytelling, and artistic intention, ensuring your wedding
          memories become an unforgettable legacy for generations to come.
        </p>

        <button className="editorial-btn">
          DISCOVER THE EXPERIENCE
        </button>

      </div>

    </section>
  );
};

export default EditorialSection;
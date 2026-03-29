import React from "react";
import "../styles/editorial.css";

const EditorialSection = () => {
  return (
    <section className="editorial">
      
      <div className="editorial-content">

        {/* top script icon */}
        <div className="editorial-icon">~</div>

        {/* main heading */}
        <h2>
          HERE EDITORIAL ELEGANCE MEETS JOY-FILLED STORYTELLING <br />
          CAPTURING REFINED CELEBRATIONS & PLAYFUL HEARTS
        </h2>

        {/* paragraph */}
        <p>
          Your story deserves to be told through sophisticated portraiture and
          joy-filled moments that feel effortlessly you. We’ll create refined
          editorial imagery that celebrates every heartfelt emotion, every
          meaningful detail, and all those perfectly imperfect in-between
          moments. Your legacy of cherished memories begins here.
        </p>

        {/* button */}
        <button className="editorial-btn">
          LEARN MORE ABOUT THE WEDDING EXPERIENCE →
        </button>

      </div>

    </section>
  );
};

export default EditorialSection;
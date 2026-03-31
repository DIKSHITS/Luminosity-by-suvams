import React from "react";
import "../styles/editorial.css";

const EditorialSection = () => {
  return (
    <section className="editorial">
      <div className="editorial-content">

        {/* Script Heading */}
        <h1 className="editorial-script">
          A modern approach to an age old tradition
        </h1>

        {/* Paragraph */}
        <p className="editorial-text">
          We’ll create refined editorial imagery that celebrates every heartfelt emotion,
          every meaningful detail, and all those perfectly imperfect in-between moments.
          Your legacy of cherished memories <span>begins here.</span>
        </p>

        {/* Button */}
        <button className="editorial-btn">
          LEARN MORE ABOUT EXPERIENCE
        </button>

      </div>
    </section>
  );
};

export default EditorialSection;
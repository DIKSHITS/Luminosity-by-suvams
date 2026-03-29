import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-page">

      <h1>LUMINOSITY</h1>
      <p className="sub">by Suvam</p>

      <div className="about-content">
        <img
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80"
          alt=""
        />

        <div>
          <h2>About Suvam</h2>
          <p>
            I’m Suvam, a wedding photographer focused on capturing real,
            emotional and timeless moments. My work blends editorial elegance
            with storytelling.
          </p>
        </div>
      </div>

    </section>
  );
};

export default About;
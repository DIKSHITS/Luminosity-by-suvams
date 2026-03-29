import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loveStories.css";

const LoveStories = () => {

  const navigate = useNavigate(); // ✅ FIX ADDED

  return (
    <section className="love">

      {/* BACKGROUND */}
      <div className="love-bg"></div>

      {/* MAIN CONTENT */}
      <div className="love-wrapper">

        {/* LEFT */}
        <div className="love-left">
          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80"
            alt=""
          />
          <p>
            With roots in fashion photography and cinematic storytelling, I bring
            an editorial eye to every celebration...
          </p>
        </div>

        {/* CENTER */}
        <div className="love-center">
          <img
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80"
            alt=""
          />
        </div>

        {/* RIGHT */}
        <div className="love-right">
          <h2 className="brand-title">LUMINOSITY</h2>

          <p className="tag">
            BY SUVAM <br />
            WEDDING PHOTOGRAPHER
          </p>

          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80"
            alt=""
          />
        </div>

      </div>

      {/* BUTTON */}
      <div className="love-btn-wrap">
        <button onClick={() => navigate("/about")}>
          GET TO KNOW SUVAM
        </button>
      </div>

    </section>
  );
};

export default LoveStories;
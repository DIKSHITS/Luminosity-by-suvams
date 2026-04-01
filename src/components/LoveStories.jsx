import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loveStories.css";

/* IMPORT IMAGE */
import img12 from "../assets/hero/img12.jpg";

const LoveStories = () => {
  const navigate = useNavigate();

  return (
    <section className="love">

      <div className="love-single">

        {/* IMAGE */}
        <div className="love-image">
          <img src={img12} alt="Luminosity by Suvam" />
        </div>

        {/* TEXT */}
        <div className="love-content">
          <h2>About Luminosity by Suvam</h2>

          <p>
            Luminosity by Suvam is all about capturing moments as they truly are real, honest, and full of emotion.
          </p>

          <p>
            With over five years behind the camera, our journey has grown from observing everyday life on the streets to documenting some of the most meaningful days in people’s lives. That foundation still shapes how we see and capture every story today.
          </p>

          <p>
            We focus on the little things the smiles, the silence, the in-between moments that often go unnoticed but mean the most.
          </p>

          <p>
            For us, it’s not just about taking photos. It’s about preserving memories in a way that feels genuine and timeless.
          </p>

          {/* BUTTON */}
          <div className="love-btn">
            <button onClick={() => navigate("/about")}>
              EXPLORE LUMINOSITY BY SUVAM
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};

export default LoveStories;
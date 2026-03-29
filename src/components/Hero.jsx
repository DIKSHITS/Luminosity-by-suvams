import React, { useEffect, useState } from "react";
import "../styles/hero.css";

/* 2 COLLECTIONS */
const collections = [
  [
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
  ]
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % collections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const images = collections[index];

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="fade-down">LUMINOSITY</h1>
        <p className="subtitle fade-down delay-1">by suvam</p>

        <div key={index} className="collage slide-transition">

          {/* LEFT (FRAMED) */}
          <div className="img left-img fade-up delay-1">
            <img src={images[0]} alt="" />
          </div>

          {/* CENTER */}
          <img src={images[1]} className="img center-img fade-up delay-2" alt="" />

          {/* TOP RIGHT */}
          <img src={images[2]} className="img top-right fade-up delay-3" alt="" />

          {/* RIGHT TALL (FRAMED) */}
          <div className="img right-tall fade-up delay-4">
            <img src={images[3]} alt="" />
          </div>

          {/* BOTTOM RIGHT */}
          <img src={images[4]} className="img bottom-right fade-up delay-5" alt="" />

        </div>
      </div>
    </section>
  );
};

export default Hero;
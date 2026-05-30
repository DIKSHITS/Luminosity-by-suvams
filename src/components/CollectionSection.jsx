import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/CollectionSection.css";

import img2 from "../assets/hero/img2.jpg";
import img3 from "../assets/hero/img3.jpg";
import img5 from "../assets/hero/img5.jpg";
import img6 from "../assets/hero/img6.jpg";
import img7 from "../assets/hero/img7.jpg";
import img8 from "../assets/hero/img8.jpg";
import img9 from "../assets/hero/img9.jpg";
import img10 from "../assets/hero/img10.jpg";
import img11 from "../assets/hero/img11.jpg";
import img12 from "../assets/hero/img12.jpg";
import img13 from "../assets/hero/img13.jpg";
import img14 from "../assets/hero/img14.jpg";
import img15 from "../assets/hero/img15.jpg";
import img16 from "../assets/hero/img16.jpg";
import img17 from "../assets/hero/img17.jpg";
import img18 from "../assets/hero/img18.jpg";
import img21 from "../assets/hero/img21.jpg";
import img22 from "../assets/hero/img22.jpg";
import img24 from "../assets/hero/img24.jpg";
import img25 from "../assets/hero/img25.jpg";
import img26 from "../assets/hero/img26.jpg";
import img27 from "../assets/hero/img27.jpg";

const images = [
  img2,
  img3,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img21,
  img22,
  img24,
  img25,
  img26,
  img27,
];

const CollectionSection = () => {
  return (
    <>
      <Navbar />

      <section className="collections">

        {/* Hero Section */}

    <div className="cinema-banner">
  <iframe
    src="https://www.youtube.com/embed/Y9li4I7MvLE?autoplay=1&mute=1&loop=1&playlist=Y9li4I7MvLE&controls=0&modestbranding=1&rel=0"
    title="Background Video"
    frameBorder="0"
    allow="autoplay; fullscreen"
    allowFullScreen
  />

  
</div>

        {/* Heading */}

        <div className="collection-heading">
          <span>COLLECTIONS</span>
        </div>

        {/* Gallery */}

        <div className="gallery-grid">
          {images.map((image, index) => {
            let className = "gallery-card";

            if (index === 0 || index === 8 || index === 16) {
              className += " large";
            } else if (index === 4 || index === 12 || index === 20) {
              className += " wide";
            } else if (index === 6 || index === 14) {
              className += " tall";
            }

            return (
              <div key={index} className={className}>
                <img src={image} alt={`Gallery ${index}`} />
              </div>
            );
          })}
        </div>

      </section>

      <Footer />
    </>
  );
};

export default CollectionSection;
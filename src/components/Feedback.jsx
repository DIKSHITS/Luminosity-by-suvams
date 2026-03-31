import React, { useState, useEffect } from "react";
import "../styles/feedback.css";

// 👉 IMPORT YOUR IMAGES
import img1 from "../assets/feedback/img1.jpg";
import img2 from "../assets/feedback/img2.jpg";

const feedbacks = [
  {
    text: `"Suvam's empathy, attention to detail, and sense of humour kept everyone in great spirits despite the pouring rain we had on the day! The photos we've received truly speak louder than words."`,
    author: "- akash & Anwesha",
    image: img1,
  },
  {
    text: `"Absolutely amazing experience! The photos feel like a movie — every emotion captured beautifully."`,
    author: "- simran & saiyam",
    image: img2,
  },
];

const Feedback = () => {
  const [index, setIndex] = useState(0);

  // 🔥 AUTO SCROLL
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbacks.length);
    }, 4000); // change slide every 4 sec

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % feedbacks.length);
  };

  const data = feedbacks[index];

  return (
    <section id="feedback" className="feedback section">

      {/* BIG NUMBER */}
      <div className="bg-number">0{index + 1}</div>

      {/* CONTENT */}
      <div key={index} className="feedback-wrapper fade-slide">

        {/* IMAGE */}
        <div className="feedback-img">
          <img src={data.image} alt="client" />
        </div>

        {/* TEXT */}
        <div className="feedback-text">
          <p className="small-title">MOMENTS FROM PAST CLIENTS</p>
          <p className="main-text">{data.text}</p>
          <p className="author">{data.author}</p>
        </div>

      </div>

      {/* NEXT BUTTON */}
      <div className="next-btn" onClick={next}>
        →
      </div>

    </section>
  );
};

export default Feedback;
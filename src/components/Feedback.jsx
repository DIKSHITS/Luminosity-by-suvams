import React, { useState } from "react";
import "../styles/feedback.css";

const feedbacks = [
  {
    text: `"Suvam's empathy, attention to detail, and sense of humour kept everyone in great spirits despite the pouring rain we had on the day! The photos we've received truly speak louder than words. Even though the weather was gloomy, the photos captured all the warmth, love, and brightness we shared on the day."`,
    author: "- Rahul & Priya",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
  },
  {
    text: `"Absolutely amazing experience! The photos feel like a movie — every emotion captured beautifully. Highly recommended!"`,
    author: "- Aman & Neha",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
  },
];

const Feedback = () => {
  const [index, setIndex] = useState(0);

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
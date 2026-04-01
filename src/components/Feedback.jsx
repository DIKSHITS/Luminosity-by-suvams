import React, { useState, useEffect } from "react";
import "../styles/feedback.css";

// 👉 IMPORT YOUR IMAGES
import img1 from "../assets/feedback/img1.jpg";
import img2 from "../assets/feedback/img2.jpg";

const feedbacks = [
  {
    text: `"Suvam and his team beautifully captured our engagement, making our special day even more memorable."`,
    author: "- akash & Anwesha",
    image: img1,
  },
  {
    text: `"We honestly couldn’t have asked for better wedding photographers. From the very beginning, they made us feel so comfortable that it never felt like a photoshoot—it felt like family capturing our special moments. The entire shoot was full of fun, laughter, and ease, and their friendly, warm nature made everything so natural. They are genuinely kind, cooperative, and incredibly professional at the same time. Even the after-wedding service has been amazing, with so much care and patience. He truly feels like a brother to me now. Thank you for capturing our wedding so beautifully and for giving us memories we will cherish forever. Highly recommended!"`,
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
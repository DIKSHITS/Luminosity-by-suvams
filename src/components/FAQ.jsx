import React from "react";
import "../styles/faq.css";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We offer wedding photography, films, pre-wedding shoots, and storytelling tailored to your journey."
  },
  {
    q: "How can we book you?",
    a: "Simply reach out via our contact form or WhatsApp, and we’ll guide you through the booking process."
  },
  {
    q: "What is your pricing?",
    a: "Our pricing varies based on your requirements and vision—connect with us for a personalized quote."
  },
  {
    q: "How far in advance should we book?",
    a: "We recommend booking at least 3–6 months in advance to secure your dates."
  },
  {
    q: "Do you travel for shoots and internationally?",
    a: "Yes, we travel across the world to capture your story, wherever it unfolds."
  },
  {
    q: "Do you offer live content creation during events?",
    a: "Yes, we create real-time content so you can share your moments instantly."
  },
  {
    q: "What is live content creation?",
    a: "It’s the process of capturing and delivering photos and reels during the event itself, ready for immediate sharing."
  },
  {
    q: "What is your team size for an event?",
    a: "Our team size typically ranges from 3–10 creatives depending on the scale of your wedding."
  },
  {
    q: "Can the team size be customized based on our requirements?",
    a: "Absolutely, we tailor our team to match the scale and style of your celebration."
  },
  {
    q: "Do you provide both photography and videography?",
    a: "Yes, we offer both, blending stills and motion into one seamless experience."
  },
  {
    q: "Do you offer drone coverage?",
    a: "Yes, we provide aerial shots to add a grand perspective to your story."
  },
  {
    q: "Will you guide us during the shoot?",
    a: "Of course, we guide you to ensure natural and effortless moments."
  },
  {
    q: "How many photos will we receive?",
    a: "You’ll receive a carefully curated collection, focusing on quality over quantity."
  },
  {
    q: "Do you edit all the photos?",
    a: "Yes, every delivered image is professionally edited in our signature style."
  },
  {
    q: "How long does it take to deliver the final photos and films?",
    a: "Final deliveries are typically completed within 4–8 weeks."
  },
  {
    q: "Will we receive same-day or instant content?",
    a: "Yes, we offer quick highlights and same-day edits based on your package."
  },
  {
    q: "Do you provide raw photos or videos?",
    a: "We focus on delivering finished, polished work; raw files are generally not provided."
  },
  {
    q: "Do you offer albums and prints?",
    a: "Yes, we design premium albums and prints to preserve your memories beautifully."
  },
  {
    q: "What happens if we need to reschedule or cancel?",
    a: "We understand unforeseen changes—our team will assist you based on our policy terms."
  },
  {
    q: "How can we contact you?",
    a: "You can reach us via our website, WhatsApp, or social media—we’d love to hear your story."
  }
];

const FAQ = () => {
  return (
    <section className="faq">

      <div className="line"></div>

      <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>

      <div className="line"></div>

      <p className="faq-quote">“The Beauty lies in the Details”</p>

      <div className="faq-content">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <h4>{index + 1}) {item.q}</h4>
            <p>{item.a}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQ;
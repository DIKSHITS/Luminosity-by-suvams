import React, { useState } from "react";
import "../styles/faq.css";

/* ============================================
   FAQ DATA
============================================ */

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in luxury wedding photography, cinematic wedding films, pre-wedding sessions, engagement shoots, destination weddings, candid photography, drone coverage, albums, and complete visual storytelling.",
  },
  {
    question: "How can we book you?",
    answer:
      "Booking is simple. Contact us through our website, WhatsApp, Instagram, or call us directly. We'll discuss your wedding plans, customize a package, and reserve your date.",
  },
  {
    question: "What is your pricing?",
    answer:
      "Every wedding is unique, so our pricing is tailored to your events, location, team size, and creative requirements. Contact us for a personalized quotation.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "Most couples reserve their dates 3–12 months in advance. Popular wedding dates fill quickly, so early booking is highly recommended.",
  },
  {
    question: "Do you travel for destination weddings?",
    answer:
      "Absolutely. We travel across India and internationally to capture beautiful love stories wherever they happen.",
  },
  {
    question: "Do you provide photography and videography together?",
    answer:
      "Yes. We provide complete photography, cinematic videography, teaser films, reels, and wedding documentaries through one experienced creative team.",
  },
  {
    question: "Do you offer drone coverage?",
    answer:
      "Yes. Drone coverage is available whenever venue regulations and weather conditions permit.",
  },
  {
    question: "Will you guide us during the shoot?",
    answer:
      "Definitely. We naturally guide couples with poses, expressions, movement, and storytelling while keeping every moment authentic.",
  },
  {
    question: "How many edited photos will we receive?",
    answer:
      "The final gallery depends on your events and package. We always prioritize storytelling and quality over unnecessary quantity.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Sneak peeks are delivered quickly, while complete wedding galleries and films are generally delivered within 4–8 weeks.",
  },
  {
    question: "Do you provide albums and premium prints?",
    answer:
      "Yes. We design handcrafted luxury albums, fine-art prints, wall frames, and premium keepsakes.",
  },
  {
    question: "Can packages be customized?",
    answer:
      "Absolutely. Every wedding is different, so we create personalized packages based on your events, destination, and vision.",
  },
];

/* ============================================
   COMPONENT
============================================ */

const FAQ = () => {

  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? -1 : index);
  };

  return (

    <section className="faq-section" id="faq">

      {/* Background */}

      <div className="faq-glow"></div>

      <div className="faq-circle circle-one"></div>

      <div className="faq-circle circle-two"></div>

      {/* Heading */}

      <div className="faq-heading">

        <span>FREQUENTLY ASKED QUESTIONS</span>

        <h2>
         Everything You Need
Before Your Story Begins
        </h2>

        <div className="faq-divider"></div>

        <p>
          Every unforgettable wedding begins with confidence.
          Here are the answers to the questions couples ask us
          before trusting us to tell their story.
        </p>

      </div>

      {/* Accordion */}

      <div className="faq-wrapper">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className={
              active === index
                ? "faq-card active"
                : "faq-card"
            }
          >

            {/* Question */}

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={active === index}
            >

              <span className="faq-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{faq.question}</h3>

              <div
                className={
                  active === index
                    ? "faq-icon open"
                    : "faq-icon"
                }
              >
                +
              </div>

            </button>

            {/* Answer */}

            <div
              className={
                active === index
                  ? "faq-answer open"
                  : "faq-answer"
              }
            >
              <p>{faq.answer}</p>
            </div>

          </div>

        ))}

      </div>

      {/* Bottom CTA */}

      <div className="faq-footer">

        <h3>
          Still have questions?
        </h3>

        <p>
          We'd love to hear about your wedding and help you
          plan the perfect photography experience.
        </p>

        <a
          href="#contact"
          className="faq-btn"
        >
          Let's Talk
        </a>

      </div>

    </section>

  );

};

export default FAQ;
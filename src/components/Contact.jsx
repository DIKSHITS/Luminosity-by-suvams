import React, { useRef, useState, forwardRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import "../styles/contact.css";

const Contact = forwardRef((props, ref) => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_d8dbgfa",
        "template_ffbywbi",
        form.current,
        "UwLqfB3mDCUolZTHK"
      )
      .then(
        () => {
          setStatus("Message Sent ✓");
          form.current.reset();

          setTimeout(() => {
            setStatus("");
          }, 3000);
        },
        () => {
          setStatus("Failed ❌");

          setTimeout(() => {
            setStatus("");
          }, 3000);
        }
      );
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      {/* Floating Lights */}
      <div className="blur blur-one"></div>
      <div className="blur blur-two"></div>

      <div className="contact-container">
        {/* ================= LEFT SIDE ================= */}

        <div className="contact-info">
          <span className="contact-tag">
            LET'S CREATE MEMORIES
          </span>

          <h1>
            Get In <span>Touch</span>
          </h1>

          <p>
            We'd love to hear your story. Whether you're planning
            an intimate celebration or a grand wedding,
            let's create timeless memories together.
          </p>

          <div className="info-list">
            <div className="info-card">
              <div className="icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h4>Phone</h4>
                <p>6289688420</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon">
                <FaEnvelope />
              </div>

              <div>
                <h4>Email</h4>
                <a href="mailto:luminositybysuvam@gmail.com">
                  luminositybysuvam@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4>Location</h4>
                <p>Patna, Bihar, India</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon">
                <FaInstagram />
              </div>

              <div>
                <h4>Instagram</h4>
                <a
                  href="https://www.instagram.com/luminosity_by_suvam?utm_source=qr&igsh=cnFoN25qaGY2MTdq"
                  target="_blank"
                  rel="noreferrer"
                >
                  @luminosity_by_suvam
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/6289688420"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp />

            Chat on WhatsApp
          </a>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="form-wrapper">
          <div className="form-glow"></div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="title-area">
              <h2>Tell Us Your Story</h2>

              <p>
                Fill out the form below and we'll get back to you
                within 24 hours.
              </p>
            </div>

            <div className="row">
              <div className="input-group">
                <input
                  type="text"
                  name="user_name"
                  required
                />
                <label>Full Name</label>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="user_email"
                  required
                />
                <label>Email Address</label>
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <input
                  type="text"
                  name="phone"
                />
                <label>Phone Number</label>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="date"
                />
                <label>Wedding Date</label>
              </div>
            </div>

            <div className="row">
              <div className="input-group full">
                <input
                  type="text"
                  name="venue"
                />
                <label>Wedding Venue</label>
              </div>
            </div>

            <div className="row">
              <div className="input-group full">
                <textarea
                  rows="6"
                  name="message"
                  required
                ></textarea>

                <label>
                  Tell us about your dream wedding...
                </label>
              </div>
            </div>

            <button
              className="submit-btn"
              type="submit"
            >
              {status || "Send Message"}

              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Quote */}

      <div className="contact-footer">
        <p>
          “Every love story deserves to be remembered beautifully.”
        </p>
      </div>
    </section>
  );
});

export default Contact;
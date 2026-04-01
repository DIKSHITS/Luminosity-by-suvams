import React, { useRef, useState, forwardRef } from "react";
import emailjs from "@emailjs/browser";
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
          setStatus("Sent ✓");
          form.current.reset();
          setTimeout(() => setStatus(""), 3000);
        },
        () => {
          setStatus("Failed ❌");
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      
      <div className="contact-header">
        <h1>Contact us</h1>

        <p>
          Think we’d be a great fit? I’d love to connect with you.
          Fill out the contact form and share your story,
          and what you’re dreaming of. We’ll bring it to life together.
        </p>
      </div>

      <h3>Ready to begin your forever story?</h3>

      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>

          <div className="row">
            <input type="text" name="user_name" placeholder="YOUR FULL NAME" required />
            <input type="email" name="user_email" placeholder="EMAIL ADDRESS" required />
          </div>

          <div className="row">
            <input type="text" name="date" placeholder="REQUESTED DATE" />
            <input type="text" name="venue" placeholder="VENUE" />
          </div>

          <div className="row">
            <input type="text" name="phone" placeholder="PHONE NUMBER" />
          </div>

          <textarea name="message" placeholder="TELL US ABOUT YOUR STORY..." required></textarea>

          <div className="btn-area">
            <button type="submit">
              {status || "SUBMIT"}
            </button>
          </div>

        </form>
      </div>

    </section>
  );
});

export default Contact;
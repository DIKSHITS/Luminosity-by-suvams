import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact">

      {/* HEADER */}
      <div className="contact-header">
        <h1>Contact us</h1>

        <p>
          Think we’d be a great fit? I’d love to connect with you.
          Fill out the contact form and share your story,
          and what you’re dreaming of. We’ll bring it to life together.
        </p>
      </div>

      {/* SUBTITLE */}
      <h3>Ready to begin your forever story?</h3>

      {/* FORM */}
      <div className="form-container">
        <form>

          <div className="row">
            <input type="text" placeholder="YOUR FULL NAME" />
            <input type="email" placeholder="EMAIL ADDRESS" />
          </div>

          <div className="row">
            <input type="text" placeholder="REQUESTED DATE" />
            <input type="text" placeholder="VENUE" />
          </div>

          <div className="row">
            <input type="text" placeholder="PHONE NUMBER" />
          </div>

          <textarea placeholder="TELL US ABOUT YOUR STORY..."></textarea>

          <div className="btn-area">
            <button type="submit">SUBMIT</button>
          </div>

        </form>
      </div>

    </section>
  );
};

export default Contact;
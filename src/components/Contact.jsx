import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact">

      {/* ================= HEADING ================= */}
      <div className="contact-heading">
        <h1>CONTACT US</h1>
        <p>We’d love to hear your story</p>
      </div>

      {/* ================= MAIN ================= */}
      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <img
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80"
            alt=""
          />

          <p>
            Thinking we’ll be a great fit? I’d be honored to meet you!
            Fill out the contact form and tell me all about your story,
            your loved ones, and what you're dreaming of.
          </p>

          <p className="email">luminosity@suvam.com</p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-right">

          <h2 className="contact-title">
            Ready for your love story to begin?
          </h2>

          <form>

            <div className="form-row">
              <input type="text" placeholder="YOUR FULL NAME" />
              <input type="email" placeholder="EMAIL ADDRESS" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="REQUESTED DATE" />
              <input type="text" placeholder="VENUE" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="PHONE NUMBER" />
              <input type="text" placeholder="BUDGET" />
            </div>

            <textarea
              placeholder="TELL US ABOUT YOUR STORY..."
              rows="4"
            ></textarea>

            <button type="submit">INQUIRE NOW</button>

          </form>

        </div>

      </div>

      {/* ================= BOTTOM INFO ================= */}
      <div className="contact-bottom">

        <div className="bottom-item">
          <h4>LOCATION</h4>
          <p>
            MUMBAI | DELHI | GOA <br />
            INDIA, WORLDWIDE
          </p>
        </div>

        <div className="bottom-item">
          <h4>BUSINESS HOURS</h4>
          <p>
            MONDAY – SATURDAY <br />
            10AM – 7PM IST <br />
            BY APPOINTMENT ONLY
          </p>
        </div>

        <div className="bottom-item">
          <h4>CONTACT INFO</h4>
          <p>
            PHONE: +91 98765 43210 <br />
            LUMINOSITY@SUVAM.COM <br />
            @LUMINOSITY_PHOTO
          </p>
        </div>

      </div>

    </section>
  );
};

export default Contact;
import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        
        {/* Left Info Section */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We’d love to hear from you! Fill out the form and we’ll get back to
            you as soon as possible.
          </p>
          <div className="info-list">
            <p><strong>📍 Address:</strong> 123 React Street, Web City</p>
            <p><strong>📧 Email:</strong> examlysupport@example.com</p>
            <p><strong>📞 Phone:</strong> +91 8765978762</p>
          </div>
        </div>

        {/* Right Form Section */}
        <form className="contact-form">
          <h2>Contact Us</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

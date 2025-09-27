import React from "react";
import "../Css/Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <p className="subtitle">
        Have questions about ITSA? Want to get involved? We'd love to hear from you. 
        Reach out to us through any of the channels below.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <a href="mailto:itsaclub@vit.edu">itsaclub@vit.edu</a>
          <p>Send us your questions anytime</p>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="icon" />
          <h3>Phone</h3>
          <a href="tel:+9198xxxxxxxx">+91 98xxx xxx46</a>
          <p>Call us during office hours</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="icon" />
          <h3>Location</h3>
          <a href="https://maps.app.goo.gl/SXAKzAJxnewBg6f66">VIT BIBWEWADI, PUNE</a>
          <p>College Campus</p>
        </div>

        <div className="contact-card">
          <FaClock className="icon" />
          <h3>Working Hours</h3>
          <p><strong>Mon-Fri:</strong> 9AM - 5PM</p>
          <p>No Appointments by Weekend</p>
        </div>
      </div>

      <h3 className="follow-title">Follow Us</h3>
      <div className="social-links">
        <a href="https://www.instagram.com/vit_itsa/"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaFacebook /></a>
        <a href="https://www.linkedin.com/company/it-students-association-itsa-vit-pune/"><FaLinkedin /></a>
       {/*<a href="#"><FaGithub /></a> */}
      </div>
    </section>
  );
};

export default ContactSection;

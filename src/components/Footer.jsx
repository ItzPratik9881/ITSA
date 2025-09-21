import React from "react";
import "../Css/Footer.css";
import logo from "../assets/logo.png"; // adjust path if needed
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ==== ABOUT + LOGO ==== */}
        <div className="footer-about">
          <div className="logo">
            <img src={logo} alt="ITSA Logo" className="logo-img" />
            <div className="logo-texts">
              <span className="logo-title">ITSA</span>
              <span className="logo-subtext">IT Students Association</span>
            </div>
          </div>

          <p className="footer-desc">
            Empowering future tech leaders through collaboration, innovation,
            and continuous learning. Join our community of passionate IT
            students.
          </p>

          <div className="footer-socials">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>

        {/* ==== QUICK LINKS ==== */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Membership</a></li>
          </ul>
        </div>

        {/* ==== RESOURCES ==== */}
        <div className="footer-links">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Learning Resources</a></li>
            <li><a href="#">Announcements</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* ==== CONTACT INFO ==== */}
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>📧 info@itsa.edu</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>📍 Tech Building, Room 201</p>
        </div>
      </div>

      {/* ==== COPYRIGHT BAR ==== */}
      <div className="footer-bottom">
        <p>
          © 2025 Information Technology Students Association. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "../Css/AboutUs.css";
import { FaBullseye, FaEye } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <h2>About Us</h2>
      <p>
        We are a dynamic community of IT students dedicated to fostering innovation,
        collaboration, and professional growth in the technology field.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <div className="icon"><FaBullseye /></div>
          <h3>Our Vision</h3>
          <p>
            To empower IT students through collaborative learning, innovative projects,
            and professional development opportunities. We strive to bridge the gap
            between academic knowledge and industry practice, preparing our members
            for successful careers in technology.
          </p>
        </div>

        <div className="about-card">
          <div className="icon"><FaEye /></div>
          <h3>Our Mission</h3>
          <p>
            To be the premier IT student organization that shapes the future of
            technology through innovation, leadership, and community engagement. We
            envision a world where our members become the technology leaders who
            drive positive change in society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

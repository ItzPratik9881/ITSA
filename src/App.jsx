import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import './App.css';
import logo from './assets/logo.png';

import AboutUs from './components/AboutUs';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      {/* Lottie Background */}
      <div className="lottie-background">
        <DotLottieReact
          src="https://lottie.host/79919b0c-1b54-448f-b340-7501fc86d174/dIt8f13OyO.lottie"
          loop
          autoplay
        />
      </div>

      {/* Navbar */}
      <header className="navbar">

        <a href="#home" className="logo">
          <img src={logo} alt="ITSA Logo" className="logo-img" />
          <div className="logo-texts">
            <span className="logo-title" href="#home">ITSA</span>
            <span className="logo-subtext">IT students association</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#events">Events</a>
          <a href="https://forms.gle/your-google-form-link">Recruitment</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <button className="mode-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>
          INFORMATION TECHNOLOGY <br /> STUDENTS <br /> ASSOCIATION
        </h1>
        <div className="cta-buttons">
          <a
            href="https://forms.gle/your-google-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="join-btn"
          >
            → Join ITSA
          </a>
          <a href="#about" className="learn-btn">Learn more</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="card">
          <div className="icon">📅</div>
          <h3>EVENTS</h3>
          <p>Hackathon, Seminar and Networking Opportunity</p>
        </div>
        <div className="card">
          <div className="icon">👨🏼‍💻</div>
          <h3>COMMITTEE</h3>
          <p>Connect with fellow IT Students and Professionals</p>
        </div>
        <div className="card">
          <div className="icon">💬</div>
          <h3>ANNOUNCEMENTS</h3>
          <p>Get new and interesting Updates and Opportunities with us</p>
        </div>
      </section>

      {/* Other Sections */}
      <AboutUs />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

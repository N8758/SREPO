// src/components/sections/HomeSection.jsx
import React from 'react';
import { ReactTyped } from 'react-typed';  // ✅ Correct import based on latest version
import './HomeSection.css';
import { Link } from 'react-router-dom';

const HomeSection = () => {
  return (
    <section className="home-section" id="home">
      <div className="overlay"></div>

      <div className="home-content">
        <h1>Hi, I'm <span>Swati Gadekar</span></h1>

        <ReactTyped
          className="typed-text"
          strings={[
            'Data Analyst 📊',
            'Machine Learning Enthusiast 🤖',
            'Software Developer 💻',
            'Problem Solver 🧠'
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />

        <p>I turn data into insights, and insights into actions. Let's build the future together!</p>

        <div className="home-buttons">
          <Link to="/projects" className="btn-glass">See My Projects</Link>
          <Link to="/contact" className="btn-glass btn-glass-alt">Get In Touch</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

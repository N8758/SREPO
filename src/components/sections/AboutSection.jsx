// src/components/sections/AboutSection.jsx
import React from 'react';
import './AboutSection.css';
import Resume from '../../assets/resume.pdf'; // ✅ Correct import

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        <div className="about-header">
          <h2>About <span>Me</span></h2>
          <p>Get to know me!</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Hello! I'm Swati Gadekar 👋</h3>
            <p>
              I'm a driven <strong>Data Analyst</strong> with internship experience at Code Spyder Technologies.
              Proficient in <strong>Python, SQL, Power BI</strong>, and <strong>data visualization</strong>, I'm passionate about
              transforming complex datasets into actionable insights using feature engineering and predictive modeling.
              <br /><br />
              I’ve worked on real-world projects like house price prediction, wine quality prediction, and Amazon sentiment analysis.
              Currently pursuing my <strong>MCA</strong>, I'm enthusiastic about leveraging data for impactful decisions.
            </p>

            <div className="about-highlights">
              <div className="highlight-card">🎯 Data Analytics</div>
              <div className="highlight-card">🚀 Machine Learning</div>
              <div className="highlight-card">💻 Full-Stack Development</div>
              <div className="highlight-card">📊 Business Insights</div>
            </div>

            <div className="resume-button">
              <a href={Resume} target="_blank" rel="noopener noreferrer" className="btn-resume">
                View Resume
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

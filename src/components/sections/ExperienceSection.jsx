// src/components/sections/ExperienceSection.jsx
import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">Work <span>Experience</span></h2>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>Data Analyst Intern - Code Spyder Technology</h3>
              <p className="timeline-location">Pune, India | Jan 2023 - Jun 2023</p>
              <p className="timeline-company">Tech company focused on software and machine learning solutions.</p>

              <ul className="responsibility-list">
                <li>Dataset Collection from Zillow and Kaggle platforms.</li>
                <li>Data Preprocessing and Feature Engineering.</li>
                <li>Data Splitting for Model Training and Testing.</li>
                <li>Model Development using Linear Regression.</li>
                <li>Model Evaluation with MSE and RMSE metrics.</li>
                <li>Model Fine-tuning and Hyperparameter Optimization.</li>
                <li>Deployment for Real-World House Price Prediction.</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;

// src/components/sections/ProjectsSection.jsx
import React from 'react';
import './ProjectsSection.css';

const projects = [
  {
    title: "Wine Quality Prediction",
    description: "Predicting wine quality using machine learning techniques to analyze datasets and identify key factors affecting wine quality.",
    skills: ["Machine Learning", "Data Analysis", "Python", "Scikit-learn", "Pandas"],
    responsibilities: [
      "Imported libraries and dataset",
      "Conducted exploratory data analysis",
      "Developed and trained machine learning models",
      "Evaluated model performance"
    ]
  },
  {
    title: "Amazon Product Reviews Sentiment Analysis",
    description: "Analyzed Amazon product reviews using NLP techniques to determine sentiment and key drivers of customer satisfaction.",
    skills: ["NLP", "Sentiment Analysis", "Text Preprocessing", "Python", "NLTK", "Scikit-learn"],
    responsibilities: [
      "Imported libraries and dataset",
      "Preprocessed and cleaned reviews",
      "Analyzed dataset and converted text into tokens",
      "Trained, evaluated, and predicted sentiment models"
    ]
  }
];

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">My <span>Projects</span></h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-skills">
                {project.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>

              <ul className="responsibilities-list">
                {project.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

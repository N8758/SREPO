// src/components/sections/SkillsSection.jsx
import React from 'react';
import './SkillsSection.css';

const skills = [
  {
    category: "Data Science",
    items: ["Data Algorithms", "Visualization", "Deep Learning", "NLP", "EDA"]
  },
  {
    category: "Programming",
    items: ["Python", "JavaScript", "Matplotlib", "Seaborn"]
  },
  {
    category: "Data Engineering",
    items: ["PySpark", "Azure Databricks", "Azure Data Factory"]
  },
  {
    category: "Business Intelligence",
    items: ["Power BI", "Excel", "Dashboard Design"]
  },
  {
    category: "Database Management",
    items: ["SQL", "MongoDB", "GitHub"]
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Analytical Thinking", "Communication"]
  }
];

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">My <span>Skills</span></h2>

        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div className="skill-card" key={index}>
              <h3>{skillCategory.category}</h3>
              <ul>
                {skillCategory.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

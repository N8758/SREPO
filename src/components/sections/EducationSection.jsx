// src/components/sections/EducationSection.jsx
import React from 'react';
import './EducationSection.css';

const educationData = [
  {
    degree: "Master of Computer Application (MCA)",
    college: "Vivekanand College",
    duration: "July 2023 - Present",
    location: "Aurangabad"
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    college: "Deogiri College",
    duration: "July 2019 - April 2022",
    location: "Aurangabad"
  }
];

const EducationSection = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <h2 className="education-title">My <span>Education</span></h2>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div className="education-item" key={index}>
              <div className="education-dot"></div>

              <div className="education-content">
                <h3>{edu.degree}</h3>
                <p className="college-name">{edu.college}</p>
                <p className="education-duration">{edu.duration}</p>
                <p className="education-location">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;

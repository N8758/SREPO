// src/components/sections/ContactSection.jsx
import React from 'react';
import './ContactSection.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <h2 className="contact-title">Get In <span>Touch</span></h2>

        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <ul>
              <li>
                <FaGithub className="contact-icon" /> 
                <a href="https://github.com/SWATIG01" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
              </li>
              <li>
                <FaLinkedin className="contact-icon" /> 
                <a href="https://www.linkedin.com/in/swatigadekar09" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              </li>
              <li>
                <FaEnvelope className="contact-icon" /> 
                <a href="mailto:gadekarswati502@gmail.com">gadekarswati502@gmail.com</a>
              </li>
              <li>
                <FaPhoneAlt className="contact-icon" /> 
                <span>+91 9876543210</span>
              </li>
              <li>
                <FaMapMarkerAlt className="contact-icon" /> 
                <span>Aurangabad, Maharashtra, India</span>
              </li>
            </ul>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;

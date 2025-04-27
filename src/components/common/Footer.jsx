import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {year} Swati Gadekar. All Rights Reserved.</p>
        <p>Crafted with ❤️ Passion and Precision.</p>
      </div>
    </footer>
  );
};

export default Footer;

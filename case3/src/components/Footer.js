
import React from 'react';

const Footer = ({ companyName }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        </div>
        <p>Dibuat dengan ❤️ oleh Joaquin Camilo Tololiu</p>
      </div>
    </footer>
  );
};

export default Footer;
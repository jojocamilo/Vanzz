
import React from 'react';

const Header = ({ companyName }) => {
  // Function to handle smooth scrolling
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">{companyName}</div>
        <ul className="nav-links">
          <li><a href="#about" onClick={handleSmoothScroll}>Tentang Kami</a></li>
          <li><a href="#gallery" onClick={handleSmoothScroll}>Produk</a></li>
          <li><a href="#contact" onClick={handleSmoothScroll}>Kontak</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
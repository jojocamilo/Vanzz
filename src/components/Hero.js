
import React from 'react';
import herokopi from '../image/herokopi.jpg';

const Hero = ({ tagline }) => {
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
    <section id="hero" className="hero-section" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', margin: 0, padding: 0 }}>
      <img
        src={herokopi}
        alt="Hero Coffee"
        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)', position: 'absolute', top: 0, left: 0 }}
      />
      <div className="hero-content" style={{ position: 'relative', zIndex: 2, width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <h1>{tagline}</h1>
        <p>Nikmati setiap tetesnya. Dibuat dengan cinta dan dedikasi.</p>
        <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
          <a href="#gallery" className="cta-button" onClick={handleSmoothScroll}>Lihat Menu</a>
          <button
            className="cta-button"
            style={{ backgroundColor: '#4a2c2a' }}
            onClick={() => alert('Reservasi tempat berhasil! (Demo)')}
          >
            Reserve Place
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
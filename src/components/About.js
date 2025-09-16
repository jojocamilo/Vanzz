import React from 'react';
import aboutImg from '../image/about.png';
const About = ({ data }) => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1rem' }}>
          <img 
            src={aboutImg} 
            alt="Icon" 
            style={{ width: '40px', height: '40px' }}
          />
          <h2 style={{ margin: 0 }}>Tentang Kami</h2>
        </div>
        <p>{data.description}</p>
      </div>
    </section>
  );
};

export default About;

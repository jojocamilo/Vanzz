
import React from 'react';
import contactIcon from '../image/comms.png';
import locactionIcon from '../image/location.png';
import emailIcon from '../image/email.png';
import instagramIcon from '../image/instagram.png';
import tiktokIcon from '../image/tiktok.png';
import whatsappIcon from '../image/whatsapp.png';
const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1rem' }}>
          <img src={contactIcon} alt="Icon" style={{ width: '40px', height: '40px' }} />
          <h2 style={{ margin: 0 }}>Hubungi Kami</h2>
        </div>
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1rem' }}>
          <img src={locactionIcon} alt="Location" style={{ width: '24px', height: '24px' }} />
          Alamat: Ruko
        </p>
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1rem' }}>
          <img src={contactIcon} alt="Contact" style={{ width: '24px', height: '24px' }} />
          Telepon: 0811-1477-070
        </p>
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1rem' }}>
          <img src={emailIcon} alt="Email" style={{ width: '24px', height: '24px' }} />
          Email: <a href="mailto:jojocamiloaja@gmail.com" style={{ color: '#4a2c2a', textDecoration: 'underline' }}>jojocamiloaja@gmail.com</a>
        </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1rem' }}>
            <a href="https://www.instagram.com/jojocam/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'inherit' }}>
              <img src={instagramIcon} alt="Instagram" style={{ width: '24px', height: '24px' }} />
              Instagram
            </a>
            <a href="https://www.tiktok.com/@itsjqc" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'inherit' }}>
              <img src={tiktokIcon} alt="TikTok" style={{ width: '24px', height: '24px' }} />
              TikTok
            </a>
            <a href="https://wa.me/628111477070" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'inherit' }}>
              <img src={whatsappIcon} alt="WhatsApp" style={{ width: '24px', height: '24px' }} />
              WhatsApp
            </a>
          </div>
        <div className="map-container">
          <iframe
            title="Lokasi Warung Kopi Abah"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.309069838038!2d106.8153493147699!3d-6.22383809549303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f447f2e1a3d5%3A0x7e7d9b9d6a3f1a!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2s!4v1625478901234!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
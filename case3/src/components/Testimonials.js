
import React from 'react';
import testimonialIcon from '../image/comment.png';


const renderStars = (count = 5) => {
  return (
    <span style={{ color: '#f7a048', fontSize: '1.2rem', marginBottom: '6px', display: 'inline-block' }}>
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </span>
  );
};

const Testimonials = ({ testimonials }) => {
  const dummyTestimonials = [
    ...testimonials,
    {
      id: 'anon1',
      author: 'Anonymous',
      text: 'Pelayanan sangat baik dan kopinya mantap!',
      rating: 5,
    },
    {
      id: 'anon2',
      author: 'Anonymous',
      text: 'Tempatnya nyaman untuk nongkrong bareng teman.',
      rating: 4,
    },
  ];
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonial-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1rem' }}>
          <img src={testimonialIcon} alt="Icon" style={{ width: '40px', height: '40px' }} />
          <h2 style={{ margin: 0 }}>Apa Kata Mereka?</h2>
        </div>
        <div className="testimonial-list">
          {dummyTestimonials.map(testimonial => (
            <div className="testimonial-card" key={testimonial.id}>
              {renderStars(testimonial.rating || 5)}
              <p>"{testimonial.text}"</p>
              <span>- {testimonial.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
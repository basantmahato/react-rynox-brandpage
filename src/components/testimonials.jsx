import React from 'react';
import './testimonials.css';

const testimonialsData = [
  {
    text: 'These gloves are incredible! Perfect fit and durability for my construction job.',
    author: '— John D.',
  },
  {
    text: 'Highly recommend! The anti-vibration feature has made a huge difference.',
    author: '— Sarah M.',
  },
  {
    text: 'Excellent quality and fast shipping. My new go-to for safety gear.',
    author: '— Michael S.',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="testimonials-heading">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
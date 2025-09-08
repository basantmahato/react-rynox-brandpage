import React from 'react';
import './about.css'; 
const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Our Company</h1>
      </div>
      <div className="about-content">
        <p>
          Welcome to our company! We are a dedicated team of professionals passionate about creating innovative solutions. Our mission is to deliver high-quality products and services that exceed our clients' expectations.
        </p>
        <p>
          With years of experience in the industry, we have built a reputation for excellence, reliability, and customer satisfaction. We believe in continuous improvement and are always looking for new ways to serve our community better.
        </p>
        <div className="about-list">
          <h3>Our Core Values</h3>
          <ul>
            <li>Innovation: We embrace creativity and new ideas.</li>
            <li>Integrity: We operate with honesty and transparency.</li>
            <li>Customer Focus: Our clients are at the heart of everything we do.</li>
            <li>Teamwork: We collaborate to achieve shared goals.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
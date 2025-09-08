import React from 'react';
import './services.css';

const servicesData = [
  {
    title: 'Cut-Resistant Gloves',
    description: 'Protection against cuts, abrasions, and sharp objects.',
    image: '/images/product8.webp',
  },
  {
    title: 'Heat-Resistant Gloves',
    description: 'Designed to withstand high temperatures and thermal hazards.',
    image: '/images/product9.webp',
  },
  {
    title: 'Waterproof Gloves',
    description: 'Keeps hands dry and comfortable in wet environments.',
    image: '/images/product1.webp',
  }
  
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-intro">Explore our comprehensive range of safety gloves designed for various industrial and personal needs. We provide high-quality hand protection solutions to ensure your safety and comfort.</p>

      <section className="service-section">
        <h2 className="section-title">Standard Protection</h2>
        <p className="section-description">Our standard line offers reliable protection for everyday tasks. 

[Image of worker wearing gloves]
</p>
        <div className="services-grid">
          {servicesData.slice(0, 4).map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="service-section specialized">
        <h2 className="section-title">Specialized Services</h2>
        <p className="section-description">For unique requirements, we offer advanced glove solutions with specialized features.</p>
        <div className="services-list">
          <div className="specialized-item">
            <h3 className="specialized-title">Chemical-Resistant Gloves</h3>
            <p className="specialized-description">Provides a barrier against harmful chemicals and corrosive substances.</p>
          </div>
          <div className="specialized-item">
            <h3 className="specialized-title">Impact-Resistant Gloves</h3>
            <p className="specialized-description">Protects hands from crushing and pinch injuries in heavy-duty work environments.</p>
          </div>
        </div>
      </section>
      
      <section className="service-section custom-solution">
        <h2 className="section-title">Custom Solutions</h2>
        <p className="section-description">Need a glove tailored to your specific needs? We offer custom design and manufacturing.</p>
        <div className="custom-solution-content">
          <p>Our team works with you to design a glove that meets your exact specifications for material, fit, and protection. Contact us to discuss your project.</p>
          <button className="contact-btn">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default Services;
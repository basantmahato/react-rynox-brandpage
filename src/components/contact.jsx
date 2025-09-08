import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-form-section">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-intro">We'd love to hear from you. Please fill out the form below to get in touch with our team.</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Your email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Enter subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      <section className="report-issue-section">
        <div className="report-issue-content">
          <h2 className="report-issue-title">Report an Issue</h2>
          <p className="report-issue-text">
            If you've encountered a problem with one of our products or need to report a safety issue, please use our dedicated reporting form. Your feedback is crucial for our continuous improvement.
          </p>
          <button className="report-btn">Report an Issue</button>
        </div>
       
      </section>
    </div>
  );
};

export default Contact;
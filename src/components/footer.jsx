import React from "react";
import './footer.css';
import { Link } from "react-router-dom";




const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">


        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

       
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: support@safebrand.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SafeBrand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

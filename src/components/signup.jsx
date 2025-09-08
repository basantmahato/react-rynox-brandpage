import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create an Account</h2>
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Your email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Create a password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
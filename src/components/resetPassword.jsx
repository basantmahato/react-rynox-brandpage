import React from 'react';
import './reset-password.css';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className="reset-password-container">
      <div className="reset-password-form">
        <h2>Reset Your Password</h2>
        <p className="reset-instructions">
          Enter the email address associated with your account and we'll send you a link to reset your password.
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <button type="submit" className="reset-btn">Reset Password</button>
        </form>
        <p className="back-to-login">
          <Link to="/login">Back to Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
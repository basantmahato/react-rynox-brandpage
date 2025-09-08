import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
 
      <div className="login-form">
        <h2>Sign In</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
        </div>
        <button type="submit" className="signin-btn">Sign In</button>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
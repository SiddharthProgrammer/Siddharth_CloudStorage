import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./style2.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with actual email and password validation
    const correctEmail = "siddharthofficialmain@gmail.com";
    const phoneNumber = "1234567890";
    const correctPassword = "123";

    if ((email === correctEmail || email === phoneNumber) && password === correctPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate("/home"); 
      
    } else {
      setError("Incorrect email or password.");
    }
  };

  return (
    <div className="gmail-login-container">
      <div className="gmail-login-box">
        <div className="gmail-logo">
          <h1 className="cloudflex-logo">
            Cloudflex MultiCloud File Manager
          </h1>
        </div>
        <h2 className="gmail-login-title">Sign in</h2>
        <p className="gmail-login-subtitle">to continue to CloudFlex</p>
        <form onSubmit={handleSubmit} className="gmail-login-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email or phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="gmail-input"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="gmail-input"
            />
          </div>
          {error && <p className="gmail-error-message">{error}</p>}
          <button type="submit" className="gmail-login-button">
            Login
          </button>
        </form>
        <div className="gmail-footer">
          <Link to="/forgot" className="gmail-link">Forgot email?</Link>
          <Link to="/forgot" className="gmail-link">Forgot password?</Link>
          <p className="gmail-footer-text">
            Not your computer? Use Guest mode to sign in privately.{" "}
            <Link to="/learn-more" className="gmail-link">Learn more</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

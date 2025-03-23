import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./style2.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Simulated registered users
  const registeredEmails = ["john@gmail.com", "siddharthofficialmain@gmail.com"]; // Replace with actual registered emails

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!registeredEmails.includes(email)) {
      setError("Email is not registered. Please try again.");
      setMessage(""); // Clear any success message
      return;
    }

    const serviceID = "service_1ziau04"; // Replace with your EmailJS service ID
const templateID = "template_ev4pe38"; // Replace with your EmailJS template ID
const publicKey = "iYCWJkwzc1hClo3KF"; // Replace with your EmailJS public key

const password = "123";// Replace this with your actual logic for fetching the user's password

    const templateParams = {
      to_email:  email, // The user's email address
      message: password, // The dynamic password to include in the email
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setMessage(`A verification has been sent to the email "${email}".`);
      setError(""); // Clear any previous error
    } catch (err) {
      setError("Failed to send email. Please try again later.");
      setMessage(""); // Clear any success message
    }
  };

  return (
    <div className="gmail-login-container">
      <div className="gmail-login-box">
        <div className="gmail-logo">
          <h1 className="cloudflex-logo">Cloudflex MultiCloud File Manager</h1>
        </div>
        <h2 className="gmail-login-title">Forgot Password</h2>
        <p className="gmail-login-subtitle">Enter your email to reset your password</p>
        <form onSubmit={handleSubmit} className="gmail-login-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="gmail-input"
            />
          </div>
          {error && <p className="gmail-error-message">{error}</p>}
          {message && <p className="gmail-success-message">{message}</p>}
          <button type="submit" className="gmail-login-button">
            Send Verification
          </button>
        </form>
        <div className="gmail-footer">
          <button
            onClick={() => navigate("/login")}
            className="gmail-login-button"
          >
            Go Back to Login Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./learnmore.css";  // Import the separate CSS file

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <div className="learn-more-container">
      <div className="learn-more-content-box">
        <h1 className="learn-more-logo">Cloudflex MultiCloud File Manager</h1>
        <h2 className="learn-more-heading">Learn More</h2>
        <p className="learn-more-text">
          Cloudflex MultiCloud File Manager is a state-of-the-art platform that allows
          you to manage your files seamlessly across multiple cloud services. With features like
          real-time synchronization, enhanced security, and intuitive interfaces, Cloudflex simplifies
          cloud file management for individuals and businesses.
        </p>
        <p className="learn-more-text">
          Whether you're collaborating with a team or organizing personal documents, Cloudflex ensures
          efficiency and accessibility from anywhere in the world.
        </p>
        <ul className="learn-more-feature-list">
          <li>Secure and encrypted file management.</li>
          <li>Support for multiple cloud providers.</li>
          <li>Intuitive drag-and-drop functionality.</li>
          <li>Real-time updates and notifications.</li>
        </ul>
        <button
          onClick={() => navigate("/login")}
          className="learn-more-login-button"
        >
          Go Back to Login Page
        </button>
      </div>
    </div>
  );
};

export default LearnMore;

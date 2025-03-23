import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import FileManagerPage from './pages/FileManagerPage';
import FileUpload from './pages/FileUpload';
import ForgotPage from './pages/forgotPage';
import LearnMore from './pages/learnMore';

const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={dashboardStyle}>
      <h1>Cloudflex MultiCloud File Manager</h1>
      <p>Welcome to your multi-cloud file management platform.</p>
      <p>Redirecting to Login page...</p>
    </div>
  );
};

const dashboardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: '#f0f4f8',
  textAlign: 'center',
};

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  // Replace with actual authentication check
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null; // Only render children if authenticated
};

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const routeBackgrounds = {
      // You can set custom backgrounds for routes here
    };

    const backgroundColor = routeBackgrounds[location.pathname] || '#ffffff'; // Default to white
    document.body.style.backgroundColor = backgroundColor;

    console.log(`Route: ${location.pathname}, Background: ${backgroundColor}`); // Debugging logs

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [location]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/learn-more" element={<LearnMore />} />
      <Route path="/forgot" element={<ForgotPage />} />
      
      {/* Protected Routes */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/file-upload"
        element={
          <ProtectedRoute>
            <FileUpload />
          </ProtectedRoute>
        }
      />
      <Route
        path="/file-manager"
        element={
          <ProtectedRoute>
            <FileManagerPage />
          </ProtectedRoute>
        }
      />
      
      <Route path="/" element={<DashboardPage />} /> {/* Default route to dashboard */}
    </Routes>
  );
};

// Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

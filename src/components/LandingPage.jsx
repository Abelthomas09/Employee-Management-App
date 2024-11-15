import React from 'react';
import { Link } from 'react-router-dom';
import "./LandingPage.css";


const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="hero-content">
        <h1 style={{marginRight:'50px'}}>Welcome to Employee Management System</h1>
        <p>
          Organize and manage your employees efficiently with our intuitive and powerful platform.
        </p>
        <Link to="/home" className="cta-button">
          Get Started
        </Link>
      </div>
      <div className="hero-image">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/employee-cv-resume-list-illustration-download-in-svg-png-gif-file-formats--employees-candidates-of-ratings-candidate-reviews-pack-business-illustrations-4737124.png?f=webp"
          alt="Employee Collaboration"
        />
      </div>
    </div>
  );
};

export default LandingPage;

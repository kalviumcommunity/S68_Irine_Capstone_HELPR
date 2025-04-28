// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Volunteer Hub</h1>
      <p>Your one-stop platform for volunteering opportunities and offers.</p>
      <div>
        <h2>Available Volunteer Jobs</h2>
        <p>Browse through various volunteering job listings and make a difference.</p>
        <Link to="/jobs">View Jobs</Link>
      </div>
      <div>
        <h2>Create a Job Posting</h2>
        <p>If you're an organization, you can post volunteer jobs here.</p>
        <Link to="/create-job">Post a Job</Link>
      </div>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-6">Welcome to LinkBridge</h1>
      <p className="mb-6 text-xl">Manage all your important links in one place.</p>
      <div>
        <Link to="/signup" className="btn btn-primary mr-4">Sign Up</Link>
        <Link to="/login" className="btn btn-secondary">Login</Link>
      </div>
    </div>
  );
};

export default LandingPage;

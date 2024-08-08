// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem('token');

  if (isAuthenticated && (location.pathname === '/login' || location.pathname === '/signup')) {
    return <Navigate to="/" />;
  }

  if (!isAuthenticated && location.pathname === '/') {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;

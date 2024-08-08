import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
            
          } />
        <Route path="/signup" element={
            <PrivateRoute>
              <SignUp />
            </PrivateRoute>
            
          } />
        <Route path="/login" element={
            <PrivateRoute>
              <Login />
            </PrivateRoute>
            
          } />
      </Routes>
    </Router>
  );
}

export default App;

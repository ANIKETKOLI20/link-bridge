import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faEye, faEyeSlash, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // to handle submit functanality

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username); 
      navigate('/');
    } catch (err) {
      setError(err.response.data.error);
    }
  };
  

  // to handle password visibility functanality

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // to handle redirect login functanality


  const redirectSignUp = () => {
    navigate("/signup");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black h-72">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Join LinkBridge</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              className="input input-bordered w-full pl-10 bg-gray-50 text-black placeholder-gray-500 border-black"
              type="text"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative mb-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              className="input input-bordered w-full pl-10 bg-gray-50 text-black placeholder-gray-500 border-black"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <button type="submit" className="btn btn-primary w-full bg-violet-800 hover:bg-violet-600 rounded-2xl text-white">Create Account</button>
          <p className="text-center mt-4 text-sm">
            Don't have an account ?{" "}
            <button className="underline ml-2 text-violet-800" onClick={redirectSignUp}>Sign Up</button>
          </p>
        </form>

      </div>
    </div>
  );
};

export default Login;

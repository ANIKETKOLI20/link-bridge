import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // to handle submit functanality

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", {
        username,
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username); 
      navigate("/");
    } catch (err) {
      setError(err.response.data.error);
    }
  };
  
// to handle password visibility functanality

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // to handle redirect login functanality

  const redirectSignIn = () => {
    navigate("/login");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Sign Up for LinkBridge
        </h1>
        <p className="mb-6 text-center text">Create your account</p>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              className="input input-bordered w-full pl-10 bg-gray-50 text-black placeholder-gray-500 border-black"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              className="input input-bordered w-full pl-10 bg-gray-50 text-black placeholder-gray-500 border-black"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              className="input input-bordered w-full pl-10 bg-gray-50 placeholder-gray-500 border-black"
              type={showPassword ? "text" : "password"}
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
          <button type="submit" className="btn btn-primary w-full bg-violet-800 hover:bg-violet-600 rounded-2xl text-white">
            Sign Up
          </button>
          <p className="text-center mt-4 text-sm">
            Already have an account ?{" "}
            <button className="underline ml-2 text-violet-800" onClick={redirectSignIn}>Sign In</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

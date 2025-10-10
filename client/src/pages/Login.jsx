import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import './Login.css'; 

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/examinee/login', form);

      if (res.data.message === "Login Successfully") {
        localStorage.setItem("userEmail", res.data.user.email);
        localStorage.setItem("userId", res.data.user.id);
        localStorage.setItem("userRole", res.data.user.role);

        navigate('/userDashboard');
      } else {
        alert(res.data.message);
      }
    } catch (er) {
      console.error(er);
      alert("Server error, please try again");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card animate-fade-in">
        <h1 className="login-title">Student Login</h1>
        <form method="POST" onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
            className="login-input"
            required
          />
          <div className="login-actions">
            <button type="submit" className="login-btn">Login</button>
            <Link to="/register" className="login-link">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

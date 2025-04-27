import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Sending login request to backend
        const response = await axios.post('http://localhost:3300/api/v1/login', formData, {
            withCredentials: true,  // Ensures cookies are sent with the request
        });

        

        // Assuming the response contains the user info and JWT token
        const { role } = response.data.user;  // Ensure the role is returned correctly
        const token = response.data.token;

        // Store token in cookie
        document.cookie = `admin_cookies=${token}`; // Store token in cookie

        // Redirect based on role (ensure correct case)
        if (role === 'user') {
            navigate('/user-dashboard');  // Redirect to user dashboard
        } else if (role === 'admin') {
            navigate('/admin-dashboard');  // Redirect to admin dashboard
        }
        toast.success("Your are loged in")

        // Reset form after successful submit
        setFormData({
            email: '',
            password: '',
        });
    } catch (error) {
        toast.error("Login failed")
    }
};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;

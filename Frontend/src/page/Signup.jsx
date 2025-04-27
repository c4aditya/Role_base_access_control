import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user', // Default role is 'user'
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
      const response = await axios.post('http://localhost:3300/api/v1/signup', formData);
      alert(response.data.message);
      
      // After successful signup, handle redirection based on the role
      const { role } = response.data.user;  // Get role from response

      // Redirect to the corresponding dashboard
      if (role === 'user') {
        navigate('/user-dashboard'); // Redirect to user dashboard
      } else if (role === 'admin') {
        navigate('/admin-dashboard'); // Redirect to admin dashboard
      }

      // Reset form data after successful signup
      setFormData({
        name: '',
        email: '',
        password: '',
        role: 'user', // Reset role to default
      });
    } catch (error) {
      alert('Error during signup');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
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
      <div>
        <label>Role</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;

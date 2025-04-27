import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  // Using a single state object for all fields
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user',
  });

  // Handle input changes for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3300/api/v1/login', formData);
      alert(response.data.message);
      // Reset form after successful submit
      setFormData({
        email: '',
        password: '',
        role: 'user',
      });
    } catch (error) {
      alert('Error during login');
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
      <div>
        <label>Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;

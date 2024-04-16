import React, { useState } from 'react';
import './App.css';
interface LoginFormState {
  username: string;
  password: string;
}

function Login() {
  const [formData, setFormData] = useState<LoginFormState>({
    username: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic Validation (Optional)
    if (formData.username === '' || formData.password === '') {
      alert('Please fill in all fields');
      return;
    }

    console.log('Username:', formData.username);
    console.log('Password:', formData.password); // Remove in production
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

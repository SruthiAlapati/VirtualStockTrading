import { useState, useEffect } from 'react';
import './register.css';  // Importing the register-specific CSS file

export default function Register({ users, setUsers, setPage }) {
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    fullname: '',
    email: '',
    role: ''
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const userArray = Array.isArray(users) ? users : [];

    const existingUser = userArray.find(u => u.username === form.username);
    if (existingUser) {
      alert("Username already exists.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Register new user with full info
    setUsers([
      ...userArray,
      {
        username: form.username,
        password: form.password,
        fullname: form.fullname,
        email: form.email,
        role: form.role
      }
    ]);

    setRegistrationSuccess(true);
    setForm({
      username: '',
      password: '',
      confirmPassword: '',
      fullname: '',
      email: '',
      role: ''
    });
  };

  useEffect(() => {
    if (registrationSuccess) {
      setTimeout(() => {
        setRegistrationSuccess(false);
        setPage("login");
      }, 3000);
    }
  }, [registrationSuccess, setPage]);

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h2>Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          required
          value={form.fullname}
          onChange={e => setForm({ ...form, fullname: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="text"
          placeholder="Username"
          required
          value={form.username}
          onChange={e => setForm({ ...form, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          required
          value={form.confirmPassword}
          onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
        />

        <input
          type="text"
          placeholder="Role (e.g., admin, user)"
          required
          value={form.role}
          onChange={e => setForm({ ...form, role: e.target.value })}
        />

        <button type="submit">Register</button>

        {registrationSuccess && (
          <div className="success-dialog">
            <div className="success-message">
              Registration Successful! Redirecting to login...
            </div>
          </div>
          
        )}
      </form>
    </div>
  );
}

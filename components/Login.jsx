import { useState } from 'react';
import './login.css';

export default function Login({ users, setUser, setPage }) {
  const [form, setForm] = useState({ username: '', password: '', role: '' });
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    // Match username, password, and role
    const found = users.find(
      u =>
        u.username === form.username &&
        u.password === form.password &&
        u.role === form.role
    );

    if (found) {
      setUser(found);
      setLoggedInUser(found);
      setLoginSuccess(true);
      setLoginFailed(false);
      setPage("home"); // redirect to home
    } else {
      setLoginFailed(true);
      setLoginSuccess(false);
    }
  };

  const handleDialogClose = () => {
    setLoginSuccess(false);
    setLoginFailed(false);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
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
          type="text"
          placeholder="Role"
          required
          value={form.role}
          onChange={e => setForm({ ...form, role: e.target.value })}
        />
        <button type="submit">Login</button>

        {loginSuccess && loggedInUser && (
          <div className="success-dialog">
            <div className="success-message">
              Login Successful!<br />
              <strong>Role:</strong> {loggedInUser.role}<br />
              Redirecting to home...
              <button onClick={handleDialogClose} className="ok-button">OK</button>
            </div>
          </div>
        )}

        {loginFailed && (
          <div className="error-dialog">
            <div className="error-message">
              Invalid credentials or role. Please try again.
              <button onClick={handleDialogClose} className="ok-button">OK</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

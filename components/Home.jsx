// src/components/Home.jsx
import './Home.css';

export default function Home({ setPage, user }) {
  const handleGetStarted = () => {
    setPage("portfolio");
  };

  return (
    <div className="home-container">
      <h1>Welcome to Virtual Stock Trading!</h1>
      {user ? (
        <p>Welcome back, {user.username}!</p>
      ) : (
        <p>Please log in or register to begin trading.</p>
      )}

      <button onClick={handleGetStarted}>Get Started</button>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Virtual Stock Trading. All rights reserved.</p>
      </footer>
    </div>
  );
}

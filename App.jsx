import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Portfolio from "./components/Portfolio";
import Register from "./components/Register";
import Login from "./components/Login";
import Market from "./components/Market";
import Tutorials from "./components/Tutorials";
import UserProfile from "./components/UserProfile";

function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  // Load portfolio when user logs in
  useEffect(() => {
    if (user) {
      const storedPortfolio = JSON.parse(localStorage.getItem(user.username)) || [];
      setPortfolio(storedPortfolio);
    } else {
      setPortfolio([]);
    }
  }, [user]);

  // Update localStorage on portfolio update
  const updatePortfolio = (updatedPortfolio) => {
    setPortfolio(updatedPortfolio);
    if (user) {
      localStorage.setItem(user.username, JSON.stringify(updatedPortfolio));
    }
  };

  // Logout function
  const handleLogout = () => {
    setUser(null);
    setPage("home");
    localStorage.removeItem(user?.username);
  };

  // Update user profile and save to localStorage
  const updateUserProfile = (updatedUser) => {
    setUser(updatedUser); // Update the user state with the updated profile
    localStorage.setItem(updatedUser.username, JSON.stringify(updatedUser)); // Save the updated user to localStorage
  };

  return (
    <div className="app-container">
      {/* Header with navigation */}
      <Header onNavigate={setPage} isLoggedIn={!!user} onLogout={handleLogout} />

      {/* Conditional rendering based on the page */}
      {page === "home" && <Home />}
      {page === "register" && <Register users={users} setUsers={setUsers} setPage={setPage} />}
      {page === "login" && <Login users={users} setUser={setUser} setPage={setPage} />}
      {page === "tutorial" && <Tutorials />}
      {page === "profile" && user && <UserProfile user={user} setUser={updateUserProfile} />}
      {page === "market" && user && <Market />}
      {page === "stocks" && user && <Stocks updatePortfolio={updatePortfolio} />}
      {page === "portfolio" && user && <Portfolio portfolio={portfolio} updatePortfolio={updatePortfolio} />}

      {/* Message if not logged in */}
      {(page === "portfolio" || page === "stocks" || page === "market" || page === "profile") && !user && (
        <p style={{ padding: '20px' }}>Please log in to view this page.</p>
      )}
    </div>
  );
}

export default App;

import './Header.css';

export default function Header({ onNavigate, isLoggedIn }) {
  return (
    <header className="header">
      <nav className="nav-bar">
        <button className="nav-btn" onClick={() => onNavigate("home")}>Home</button>
        <button className="nav-btn" onClick={() => onNavigate("login")}>Login</button>
        <button className="nav-btn" onClick={() => onNavigate("register")}>Register</button>

        {isLoggedIn && (
          <>
            <button className="nav-btn" onClick={() => onNavigate("portfolio")}>Portfolio</button>
            <button className="nav-btn" onClick={() => onNavigate("stocks")}>Stocks</button>
            <button className="nav-btn" onClick={() => onNavigate("market")}>Market</button>
            <button className="nav-btn" onClick={() => onNavigate("tutorial")}>Tutorial</button>
            <button className="nav-btn" onClick={() => onNavigate("profile")}>Profile</button>

          </>
        )}
      </nav>
    </header>
  );
}

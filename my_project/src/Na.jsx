import { Link } from "react-router-dom";

function Na({ onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="./home">Home</Link>
        <Link to="./plants">Plants</Link>
        <Link to="/history">History</Link>
        <Link to="/animals">Animals</Link>
        <Link to="/humans">Humans</Link>

      </div>
      <button onClick={onLogout}>Log Out</button>
    </nav>
  );
}

export default Na;
import { Link } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="wrapper nav-container">
        <Link to="#">IdeaHive</Link>

        {/* link for desktop */}
        <ul className="nav-links-desktop">
          <li>
            <Link to="#">Story</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
          <li>
            <Link to="#">Sign in</Link>
          </li>
          <li>
            <Link to="#">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

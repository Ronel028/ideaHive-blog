import { Link } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="wrapper nav-container">
        <Link to="/" className="logo">
          IdeaHive
        </Link>

        {/* link for desktop */}
        <ul className="nav-links-desktop">
          <li>
            <Link to="/story" className="link-desktop">
              Story
            </Link>
          </li>
          <li>
            <Link to="/about" className="link-desktop">
              About
            </Link>
          </li>
          <li>
            <Link to="contact" className="link-desktop">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/signin" className="link-desktop">
              Sign in
            </Link>
          </li>
          <li>
            <Link to="/signup" className="link-desktop link-btn">
              Sign up
            </Link>
          </li>
        </ul>
        {/* link for desktop */}

        {/* menu btn */}
        <label htmlFor="menu" className="menu-btn">
          <input type="checkbox" name="checkbox" id="menu" />
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </label>
      </div>
    </nav>
  );
};

export default Navigation;

import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import sampleImage1 from "../../assets/sample-profile-1.jpeg";
import "./navigation.scss";

const Navigation = (props) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleChange = () => {
    setDisplayMenu((currentState) => !currentState);
  };

  const useLogin = () => {
    if (props.isLogin) {
      return (
        <>
          <li>
            <Link to="contact" className="link-desktop write-desktop">
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.75 2C4.5 2 3 12.5 2.25 17H3.7485C4.248 14.5003 5.49825 13.1255 7.5 12.875C10.5 12.5 12.75 9.875 13.5 7.625L12.375 6.875L13.125 6.125C13.875 5.375 14.628 4.25 15.75 2Z"
                  fill="#F1F1F1"
                />
              </svg>
              Write
            </Link>
          </li>
          <li className="login-profile">
            <label
              htmlFor="profile"
              to="contact"
              className="link-desktop profile-desktop"
            >
              <input type="checkbox" id="profile" />
              Hi, John Doe
              <div className="profile-container">
                <img src={sampleImage1} alt="" />
              </div>
              <div className="menu-profile-desktop">
                <Link to="/profile-info" className="user">
                  User Profile
                </Link>
                <Link to="/signup" className="create-new">
                  Create new account
                </Link>
                <button className="sign-out">Sign out</button>
              </div>
            </label>
          </li>
        </>
      );
    } else {
      return (
        <>
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
        </>
      );
    }
  };

  return (
    <div>
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
            {/* display this if user is login */}
            {useLogin()}
          </ul>
          {/* link for desktop */}

          {/* menu btn */}
          <label htmlFor="menu" className="menu-btn">
            <input
              type="checkbox"
              name="checkbox"
              id="menu"
              onChange={handleChange}
            />
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </label>
        </div>
      </nav>
      {/* menu mobile */}
      <div
        className="nav-links-mobile"
        style={{ top: displayMenu ? "71px" : "" }}
      >
        <ul className="links">
          <li>
            <Link to="/story" className="link-mobile">
              Story
            </Link>
          </li>
          <li>
            <Link to="/about" className="link-mobile">
              About
            </Link>
          </li>
          <li>
            <Link to="contact" className="link-mobile">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="auth">
          <li>
            <Link to="/signin" className="link-mobile">
              Sign in
            </Link>
          </li>
          <li>
            <Link to="/signup" className="link-mobile" id="btn">
              Sign up
            </Link>
          </li>
          {/* display this if user is login */}
          {/* <li>
            <Link to="/profile-info" className="link-mobile">
              User profile
            </Link>
          </li>
          <li>
            <Link to="/signup" className="link-mobile">
              Create new account
            </Link>
          </li>
          <li>
            <button className="link-mobile signout-mobile">Sign out</button>
          </li>
          <li>
            <Link to="/write-blog" className="link-mobile" id="btn">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.75 2C4.5 2 3 12.5 2.25 17H3.7485C4.248 14.5003 5.49825 13.1255 7.5 12.875C10.5 12.5 12.75 9.875 13.5 7.625L12.375 6.875L13.125 6.125C13.875 5.375 14.628 4.25 15.75 2Z"
                  fill="#F1F1F1"
                />
              </svg>
              Write
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

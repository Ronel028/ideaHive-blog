import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";
import profileAlt from "../../assets/profile-alt.jpeg";
import "./navigation.scss";

const Navigation = () => {
  // hooks
  const navigate = useNavigate();
  const [displayMenu, setDisplayMenu] = useState(false);
  const { user, setUser } = useContext(userContext); // call the context api
  // hooks

  const handleChange = () => {
    setDisplayMenu((currentState) => !currentState);
  };

  const isLoginDesktop = () => {
    if (user.isLogin) {
      return (
        <>
          <li>
            <Link to="/post-blog" className="link-desktop write-desktop">
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
              Hi, {`${user.fname} ${user.lname}`}
              <div className="profile-container">
                <img
                  src={user.Image === "N/A" ? profileAlt : user.Image}
                  alt={`${user.fname} ${user.lname}`}
                />
              </div>
              <div className="menu-profile-desktop">
                <Link to="/account-settings" className="user">
                  Account settings
                </Link>
                <Link to="/signup" className="create-new">
                  Create new account
                </Link>
                <button className="sign-out" onClick={signoutUser}>
                  Sign out
                </button>
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

  const isLoginMobile = () => {
    if (user.isLogin) {
      return (
        <>
          <li>
            <Link to="/account-settings" className="link-mobile">
              Account settings
            </Link>
          </li>
          <li>
            <Link to="/signup" className="link-mobile">
              Create new account
            </Link>
          </li>
          <li>
            <button
              className="link-mobile signout-mobile"
              onClick={signoutUser}
            >
              Sign out
            </button>
          </li>
          <li>
            <Link to="/post-blog" className="link-mobile" id="btn">
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
          </li>
        </>
      );
    } else {
      return (
        <>
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
        </>
      );
    }
  };

  // function for signout user
  const signoutUser = async () => {
    try {
      const signout = await axios.get(
        "https://api-ideahive.onrender.com/user/signout"
      );
      if (signout.data.isLogout) {
        setUser({
          ...user,
          isLogin: false,
        });
        navigate("/signin");
      } else {
        throw signout.data.error;
      }
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <>
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
            {isLoginDesktop()}
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
        <ul className="auth">{isLoginMobile()}</ul>
      </div>
    </>
  );
};

export default Navigation;

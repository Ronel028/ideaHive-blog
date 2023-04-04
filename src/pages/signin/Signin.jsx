import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import cookies from "js-cookie";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { userContext } from "../../context/userContext";
import "./signin.scss";

const signInErr = (errorMsg) => toast.error(errorMsg);

const Signin = () => {
  // hooks
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext); // call the context api
  const [inputVal, setInputVal] = useState({
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState(false);
  // hooks

  // use this function to validate this page if login or not
  useEffect(() => {
    const getSession = async () => {
      const checkSession = await axios.get(
        "https://idea-h-ive-blog.vercel.app/user/verified"
      );
      if (checkSession.data.isLogin) {
        navigate("/");
      }
    };
    getSession();
  }, []);
  // use this function to validate this page if login or not

  // get the input value and save to state
  const getInputVal = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };
  // get the input value and save to state

  // signin user
  const signin = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const signinUser = await axios.post(
        "https://idea-h-ive-blog.vercel.app/user/signin",
        inputVal,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (signinUser.data.isLogin) {
        setLoader(false);
        setUser({
          ...user,
          isLogin: signinUser.data.isLogin,
          fname: signinUser.data.userData[0].fname,
          lname: signinUser.data.userData[0].lname,
          email: signinUser.data.userData[0].email,
          about: signinUser.data.userData[0].about,
          Image: signinUser.data.userData[0].profileImage,
          birthDay: signinUser.data.userData[0].birthDay,
        });
        cookies.set("access_token", signinUser.data.token, {
          expires: 7,
          path: "/",
        });
        navigate("/");
      } else {
        throw signinUser.data.error;
      }
    } catch (error) {
      signInErr(error);
    }
    setLoader(false);
  };
  // signin user

  // loader
  const displayLoader = () => {
    if (loader) {
      return <span className="loader"></span>;
    } else {
      return "";
    }
  };
  // loader

  return (
    <motion.main
      className="signin-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <div className="wrapper signin">
        <h1>Sign in</h1>
        <p>
          No account?{" "}
          <Link to="/signup" className="signup-link">
            Create account
          </Link>
        </p>

        {/* signin error */}
        <Toaster position="top-right" reverseOrder={false} />
        {/* signin error */}

        <form className="signin-form" onSubmit={signin}>
          <div className="input-container email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={getInputVal}
            />
          </div>
          <div className="input-container password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={getInputVal}
            />
          </div>
          <div className="signin-btn">
            <button type="submit" id="btn">
              Sign in
              {displayLoader()}
            </button>
          </div>
        </form>
      </div>
    </motion.main>
  );
};

export default Signin;

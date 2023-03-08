import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
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
      const checkSession = await axios.get("/user/verified");
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
      const signinUser = await axios.post("/user/signin", inputVal, {
        headers: {
          "Content-Type": "application/json",
        },
      });
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

  // return jsx syntax to display the error message if failed to login
  // const displayError = () => {
  //   if (error.length > 0) {
  //     return (
  //       <motion.div
  //         className="signin-error"
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         exit={{ opacity: 1 }}
  //       >
  //         <svg
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"
  //             fill="#292929"
  //           />
  //         </svg>
  //         <div className="error-container">
  //           <h4>Whoops</h4>
  //           <p className="error-message">{error}</p>
  //         </div>
  //       </motion.div>
  //     );
  //   } else {
  //     return "";
  //   }
  // };
  // return jsx syntax to display the error message if failed to login

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

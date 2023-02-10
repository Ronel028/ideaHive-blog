import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import "./signin.scss";
const Signin = () => {
  const [inputVal, setInputVal] = useState({
    email: "",
    password: "",
  });

  const getInputVal = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };

  const signin = async (e) => {
    e.preventDefault();
    const signinUser = await axios.post("/user/signin", inputVal, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(signinUser.data);
  };

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
            </button>
          </div>
        </form>
      </div>
    </motion.main>
  );
};

export default Signin;

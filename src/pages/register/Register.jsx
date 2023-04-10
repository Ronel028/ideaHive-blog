import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "./register.scss";
const Register = () => {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState([]);
  const [loader, setLoader] = useState(false);

  const getInputVal = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(inputVal).forEach(([name, value]) => {
        formData.append(name, value);
      });
      setLoader(true);
      const regUser = await axios.post(
        "https://api-ideahive.vercel.app/user/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (regUser.data.error) {
        setError(regUser.data.error);
      } else {
        navigate("/signin");
      }
      setLoader(false);
    } catch (error) {}
  };

  // render error message
  const errorMsg = () => {
    if (error.length > 0) {
      return (
        <motion.ul
          id="error-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          {error.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </motion.ul>
      );
    } else {
      return "";
    }
  };

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
      className="register-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <div className="wrapper register">
        <h1>Create an account</h1>
        <p>
          Already have an account?{" "}
          <Link to="/signin" className="login-link">
            Login
          </Link>
        </p>
        {/* error message */}
        {errorMsg()}

        <form className="register-form" onSubmit={registerUser}>
          <div className="input-container fname">
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="fname" onChange={getInputVal} />
          </div>
          <div className="input-container lname">
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname" onChange={getInputVal} />
          </div>
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
          <div className="register-btn">
            <button type="submit" id="btn">
              Create account
              {displayLoader()}
            </button>
          </div>
        </form>
      </div>
    </motion.main>
  );
};

export default Register;

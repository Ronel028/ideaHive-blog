import { Link } from "react-router-dom";
import "./register.scss";
const Register = () => {
  return (
    <main className="register-container">
      <div className="wrapper register">
        <h1>Create an account</h1>
        <p>
          Already have an account?{" "}
          <Link to="/signin" className="login-link">
            Login
          </Link>
        </p>
        <form className="register-form">
          <div className="input-container fname">
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="fname" />
          </div>
          <div className="input-container lname">
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname" />
          </div>
          <div className="input-container email">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="input-container password">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="register-btn">
            <button type="submit" id="btn">
              Create account
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;

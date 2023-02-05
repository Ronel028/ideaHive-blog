import { Link } from "react-router-dom";
import "./signin.scss";
const Signin = () => {
  return (
    <main className="signin-container">
      <div className="wrapper signin">
        <h1>Sign in</h1>
        <p>
          No account?{" "}
          <Link to="/signup" className="signup-link">
            Create account
          </Link>
        </p>
        <form className="signin-form">
          <div className="input-container email">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="input-container password">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="signin-btn">
            <button type="submit" id="btn">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signin;

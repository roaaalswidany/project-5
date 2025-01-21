import "./SignUp.css";
import Input from "../components/Input/Input";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="signup-page">
      <div className="title">
        <h1>Sign Up</h1>
        <p>Enter your email, username, and password to sign up!</p>
      </div>
      <form>
        <Input type="text" placeholder="Enter your username" required />
        <Input type="email" placeholder="Enter your email" required />
        <Input type="password" placeholder="Enter your password" required />
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>
      <p>
        Already have an account? <Link to="/signin">Log In</Link>
      </p>
    </div>
  );
}

export default SignUp;

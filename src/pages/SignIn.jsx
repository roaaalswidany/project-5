import "./SignIn.css";
import Input from "../components/Input/Input";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="signin-page">
      <div className="title">
        <h1>Sign In</h1>
        <p>Enter your email and password to sign in!</p>
      </div>
      <form>
        <Input type="email" placeholder="Enter your email" required />
        <Input type="password" placeholder="Enter your password" required />
        <button type="submit" className="btn">
          Sign In
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default SignIn;

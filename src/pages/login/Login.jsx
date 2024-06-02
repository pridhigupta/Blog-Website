import "./login.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">LOG IN</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type='email' placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Log In</button>
      </form>
      <button className="loginRegisterButton">
        <Link className='link' to="/register">Register</Link>
      </button>
    </div>
  );
}
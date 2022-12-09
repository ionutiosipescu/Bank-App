import React from "react";
import "./Login.css";

import logo from "../../images/logo.png";
import illustration from "../../images/login-hero.webp";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="wrapper">
      <div className="login_wrapper">
        <div className="login_container">
          <img src={logo} className="login_logo" />
          {/* <h1>Log In</h1> */}
          <p className="login_text">The only place for all your finances!</p>
          <br />
          <form action="" className="form">
            <label htmlFor="" className="form_item">
              Email
            </label>
            <input type="text" className="form_item" />
            <label htmlFor="" className="form_item">
              Password
            </label>
            <input type="password" className="form_item" />
            <div className="checkbox">
              <span>
                <input type="checkbox" />
                <p>Keep me logged in</p>
              </span>
            </div>
            <Link to="/" className="btn">
              Log In
            </Link>
          </form>
          <div className="footer">
            <div className="register">
              <h5>Don't have an account?</h5>
              <Link to="/register">Sign Up</Link>
            </div>
            <Link>Forgot your Password?</Link>
          </div>
        </div>
        {/*  */}
        <div className="hero">
          <div className="hero_art">
            <img src={illustration} alt="" />
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Login;

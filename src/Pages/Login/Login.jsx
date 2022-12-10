import React from "react";
import "./Login.css";

import logo from "../../images/logo.png";
import illustration from "../../images/login-hero.webp";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Login() {
  return (
    <div className="wrapper">
      <div className="login_wrapper">
        <div className="login_container">
          <img src={logo} className="login_logo" />
          <p className="login_text">The only place for all your finances!</p>
          <br />
          <form action="" className="form">
            <Input type="text" label="Username" />
            <Input type="password" label="Password" />
            <div className="checkbox-container">
              <div className="checkbox">
                <input type="checkbox" />
                <p>Keep me logged in</p>
              </div>
              <Link>Forgot Password?</Link>
            </div>
            <Button link="/" label="Log In" size="100" fill="fill" />
          </form>
          <div className="footer">
            <div className="register">
              <h5>Don't have an account?</h5>
              <Link to="/register">Sign Up</Link>
            </div>
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

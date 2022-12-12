import React from "react";
import "./Login.css";

import logo from "../../assets/images/logo.png";
import illustration from "../../assets/images/login-hero.webp";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

function Login() {
  return (
    <div className="wrapper">
      <div className="login-wrapper">
        <div className="login-container">
          <img src={logo} className="login-logo" />
          <p className="login-text">The only place for all your finances!</p>
          <form action="" className="form">
            <Input type="text" label="Username" size="lg" />
            <Input type="password" label="Password" size="lg" />
            <div className="checkbox-container">
              <div className="checkbox">
                <input type="checkbox" />
                <p>Keep me logged in</p>
              </div>
              <Link>Forgot Password?</Link>
            </div>
            <Button to="/dashboard" label="Log In" size="100" isPrimary />
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
          <div className="hero-art">
            <img src={illustration} alt="" className="illustration" />
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import "./SignIn.css";
import logo from "../images/yes-logo.png";
import money from "../images/money.png";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="container">
      <nav>
        <img src={logo} alt="Logo" className="logo" />
        <p className="welcome">Log in to get started</p>
        <form className="login">
          <input
            type="text"
            placeholder="user"
            className="login__input login__input--user"
          />
          <input
            type="text"
            placeholder="PIN"
            maxLength="4"
            className="login__input login__input--pin"
          />
          <Link to="/" className="login__btn">
            &rarr;
          </Link>
        </form>
      </nav>
      <div className="money_container">
        <img src={money} className="money" />
        <img src={money} className="money" />
      </div>
    </div>
  );
}

export default SignIn;

import React from "react";
import "./Login.css";

import logo from "../../assets/images/logo.png";
import illustration from "../../assets/images/login-hero.webp";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { useSelector } from "react-redux";
import { selectRegisterUser } from "../../state-management/registerUser/registerUser.selector";
// import { useState } from "@storybook/addons";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRegisterUser } from "../../state-management/registerUser/registerUser.action";

// const testDataUser = {
//   username: "",
//   password: "",
// };

function Login() {
  const dispatch = useDispatch();
  // selector
  const register = useSelector(selectRegisterUser);
  const { username, password } = register;
  // componentState
  // const [registerUser, setRegisterUserTest] = useState(testDataUser);
  // destructuring componentState
  // const { username, password } = registerUser;

  const handleChange = (e) => {
    // const { name, value } = e.target;
    dispatch(setRegisterUser(register, e));
    // console.log(registerUser);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    // dispatch(setRegisterUser(registerUser));
  };

  useEffect(() => {
    console.log(register);
  }, []);

  return (
    <div className="wrapper">
      <div className="login_wrapper">
        <div className="login_container">
          <img src={logo} className="login_logo" />
          <p className="login_text">The only place for all your finances!</p>
          <form action="" className="form" onSubmit={handlerSubmit}>
            <Input
              type="text"
              label="Username"
              value={username || ""}
              name="username"
              onChange={handleChange}
            />
            <Input
              type="password"
              label="Password"
              value={password || ""}
              name="password"
              onChange={handleChange}
            />
            <div className="checkbox-container">
              <div className="checkbox">
                <input type="checkbox" />
                <p>Keep me logged in</p>
              </div>
              <Link>Forgot Password?</Link>
            </div>
            {/* <Button
              to="/dashboard"
              label="Log In"
              size="100"
              isPrimary
            /> */}
            <button type="submit">Click to submit</button>
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

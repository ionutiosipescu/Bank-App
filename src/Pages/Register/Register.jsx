import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

import illustration from "../../assets/images/register.webp";
import Input from "../../components/StaticComponents/Input/Input";
import Button from "../../components/StaticComponents/Button/Button";

function Register() {
  return (
    <div className="wrapper">
      <div className="register_wrapper">
        <div className="register_container">
          <h1>Register</h1>
          <div className="register_form_container">
            <div className="register_form_wrapper">
              <form action="" className="register_form">
                <div className="register_form_part">
                  <Input type="text" label="First Name" size="small" />
                  <Input type="text" label="Last Name" size="small" />
                </div>
                <Input type="email" label="Email" />
                <div className="register_form_part">
                  <Input
                    type="text"
                    label="Address"
                    size="small"
                    placeholder="City"
                  />
                  <Input
                    type="text"
                    size="small"
                    placeholder="Number, Suite, etc"
                  />
                </div>
              </form>
              {/*  */}
              <form action="" className="register_form">
                <div className="register_form_part">
                  <Input type="text" label="Username" size="small" />
                  <Input type="text" label="Mobile Number" size="small" />
                </div>
                <div className="register_form_part">
                  <Input type="text" label="Sex" size="small" />
                  <Input type="date" label="Birth Date" size="small" />
                </div>
                <div className="register_form_part">
                  <Input type="password" label="Password" size="small" />
                  <Input
                    type="password"
                    label="Confirm Password"
                    size="small"
                  />
                </div>
              </form>
            </div>
            <div className="checkbox-container">
              <div className="checkbox">
                <input type="checkbox" />
                <p>
                  Yes, I agree with the <Link>Terms and Services</Link>
                </p>
              </div>
              <Button label="Register" to="/" size="lg" isPrimary />
            </div>
          </div>
          <div className="footer">
            <div className="register">
              <h5>Already have an account?</h5>
              <Link to="/login">Go back to Log In</Link>
            </div>
          </div>
        </div>
        <div className="hero">
          <img src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Register;

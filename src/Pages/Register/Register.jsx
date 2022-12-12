import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

import illustration from "../../assets/images/register.webp";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

function Register() {
  return (
    <div className="wrapper">
      <div className="register-wrapper">
        <div className="register-container">
          <h1>Register</h1>
          <div className="register-form-container">
            <div className="register-form-wrapper">
              <form action="" className="register-form">
                <div className="register-form-part">
                  <Input type="text" label="First Name" size="sm" />
                  <Input type="text" label="Last Name" size="sm" />
                </div>
                <Input type="email" label="Email" size="md" />
                <div className="register-form-part">
                  <Input
                    type="text"
                    label="Address"
                    size="sm"
                    placeholder="City"
                  />
                  <Input
                    type="text"
                    size="sm"
                    placeholder="Number, Suite, etc"
                  />
                </div>
              </form>
              {/*  */}
              <form action="" className="register-form">
                <div className="register-form-part">
                  <Input type="text" label="Username" size="sm" />
                  <Input type="text" label="Mobile Number" size="sm" />
                </div>
                <div className="register-form-part">
                  <Input type="text" label="Sex" size="sm" />
                  <Input type="date" label="Birth Date" size="sm" />
                </div>
                <div className="register-form-part">
                  <Input type="password" label="Password" size="sm" />
                  <Input type="password" label="Confirm Password" size="sm" />
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
              <Button label="Register" to="/dashboard" size="lg" isPrimary />
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
          <div className="register-art">
            <img src={illustration} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

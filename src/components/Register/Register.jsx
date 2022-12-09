import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

import illustration from "../../images/register.webp";

function Register() {
  return (
    <div className="wrapper">
      <div className="register_wrapper">
        <div className="register_container">
          <h1>Register</h1>
          <div className="register_form_wrapper">
            <form action="" className="register_form">
              <div className="register_form_part">
                <label htmlFor="" className="form_item">
                  First Name
                </label>
                <label htmlFor="" className="form_item">
                  Last Name
                </label>
              </div>
              <div className="register_form_part">
                <input type="text" className="form_item" />
                <input type="text" className="form_item" />
              </div>
              <div className="register_form_part">
                <label htmlFor="" className="form_item">
                  Email
                </label>
              </div>
              <div className="register_form_part">
                <input type="email" className="form_item" />
              </div>
              <div className="register_form_part">
                <label htmlFor="" className="form_item">
                  Address
                </label>
              </div>
              <div className="register_form_part">
                <input
                  type="text"
                  className="form_item city"
                  placeholder="City"
                />
                <input
                  type="text"
                  className="form_item "
                  placeholder="Str, Bl, Ap ..."
                />
              </div>
            </form>
            {/*  */}
            <form action="" className="register_form">
              <div className="register_form_part">
                <label htmlFor="" className="form_item">
                  Date of Birth
                </label>
                <label htmlFor="" className="form_item">
                  Phone Number
                </label>
              </div>
              <div className="register_form_part">
                <input type="date" className="form_item" />
                <input type="number" className="form_item" />
              </div>
              <div className="register_form_part">
                <label htmlFor="" className="form_item">
                  Sex
                </label>
              </div>
              <div className="register_form_part">
                <input type="radio" name="sexChoice" className="radio" />
                <label>Female</label>
                <input type="radio" name="sexChoice" />
                <labelh>Male</labelh>
                <input type="radio" name="sexChoice" />
                <label>Helicopter</label>
              </div>
              <div className="register_form_part">
                <label htmlFor="" className="form_item">
                  Password
                </label>
                <label htmlFor="" className="form_item">
                  Confirm Password
                </label>
              </div>
              <div className="register_form_part">
                <input type="password" className="form_item" />
                <input type="password" className="form_item" />
              </div>
            </form>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <p>
              Yes, I agree with the <Link>Terms and Services</Link>
            </p>
            <Link to="/" className="btn register_btn">
              Register
            </Link>
          </div>
          <p>
            Already have an account?
            <Link to="/login">Go back to Log In</Link>
          </p>
        </div>
        <div className="hero">
          <img src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Register;

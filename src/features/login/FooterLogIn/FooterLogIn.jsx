import React from "react";
import { Link } from "react-router-dom";
import { FooterContainerLogin, FooterBoxLogin } from "./FooterLogin.style";

function FooterLogIn() {
  return (
    <FooterContainerLogin>
      <FooterBoxLogin>
        <h5>Don't have an account?</h5>
        <Link to="/register">Sign Up</Link>
      </FooterBoxLogin>
    </FooterContainerLogin>
  );
}

export default FooterLogIn;

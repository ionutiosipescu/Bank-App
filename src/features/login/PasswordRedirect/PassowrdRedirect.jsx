import React from "react";
import { Link } from "react-router-dom";
import {
  FooterContainerLogin,
  FooterBoxLogin,
} from "../FooterLogIn/FooterLogin.style";

function PasswordRedirect() {
  return (
    <FooterContainerLogin>
      <FooterBoxLogin>
        <h5>Did you forgot your Password ?</h5>
        <Link to="/changed-password">Reset Password</Link>
      </FooterBoxLogin>
    </FooterContainerLogin>
  );
}

export default PasswordRedirect;

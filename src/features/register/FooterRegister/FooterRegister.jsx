import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from "./FooterRegister.style";

function FooterRegister() {
  return (
    <FooterContainer>
      <h5>Already have an account?</h5>
      <Link to="/login">Go back to Log In</Link>
    </FooterContainer>
  );
}

export default FooterRegister;

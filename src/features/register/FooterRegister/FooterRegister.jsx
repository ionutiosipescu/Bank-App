import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from "./FooterRegister.style";

function FooterRegister({ ...props }) {
  const { passChange } = props;
  return (
    <FooterContainer passChange={passChange}>
      <h5>Already have an account?</h5>
      <Link to="/">Go back to Log In</Link>
    </FooterContainer>
  );
}

export default FooterRegister;

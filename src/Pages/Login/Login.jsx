import React from "react";
import "./Login.css";

import illustration from "../../assets/images/login-hero.webp";

/////////////////

import { Wrapper, FormWrapper } from "./../../components/Form/Form.style";
import LoginForm from "../../components/LoginForm/LoginForm";

function Login() {
  return (
    <Wrapper>
      {/* <div className="wrapper"> */}
      <FormWrapper>
        {/* <div className="login-wrapper"> */}
        <LoginForm />
        {/*  */}
        <div className="hero">
          <div className="hero-art">
            <img src={illustration} alt="" className="illustration" />
          </div>
        </div>
        {/*  */}
        {/* </div> */}
      </FormWrapper>
      {/* </div> */}
    </Wrapper>
  );
}

export default Login;

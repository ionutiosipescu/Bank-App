import React from "react";
import { LogInContainer, LogInWrapper } from "./MainLogIn.style";
import FooterLogIn from "../FooterLogIn/FooterLogIn";
import HeroLogIn from "../HeroLogIn/HeroLogIn";
import FormLogIn from "../FormLogIn/FormLogIn";
import logo from "../../../assets/images/logo.png";

function MainLogIn() {
  return (
    <LogInWrapper>
      <LogInContainer>
        <img src={logo} className="login_logo" />
        <p className="login_text">The only place for all your finances!</p>
        <FormLogIn />
        <FooterLogIn />
      </LogInContainer>
      <HeroLogIn />
    </LogInWrapper>
  );
}

export default MainLogIn;

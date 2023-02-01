import React from "react";
import {
  LogInContainer,
  LogInWrapper,
  Logo,
  LogoText,
} from "./MainLogIn.style";
import FooterLogIn from "../FooterLogIn/FooterLogIn";
import HeroLogIn from "../HeroLogIn/HeroLogIn";
import FormLogIn from "../FormLogIn/FormLogIn";
import logo from "../../../assets/images/logo.png";
import PasswordRedirect from "../PasswordRedirect/PassowrdRedirect";

function MainLogIn() {
  return (
    <LogInWrapper>
      <LogInContainer>
        <Logo src={logo} />
        <LogoText>The only place for all your finances!</LogoText>
        <FormLogIn />
        <FooterLogIn />
        <PasswordRedirect />
      </LogInContainer>
      <HeroLogIn />
    </LogInWrapper>
  );
}

export default MainLogIn;

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
import logobank2 from "../../../assets/images/logobank2.png";
import PasswordRedirect from "../PasswordRedirect/PassowrdRedirect";
import { LogoBankShort } from "./MainLogIn.style";
import { useEffect } from "react";
import { getCSRF } from "../../../state-management/Auth/login/login.service";
import { useDispatch } from "react-redux";

function MainLogIn() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCSRF());
  }, []);

  return (
    <LogInWrapper>
      <LogInContainer>
        <LogoBankShort src={logobank2} />
        <LogoText>
          The only place for all <br /> your finances!
        </LogoText>
        <FormLogIn />
        <FooterLogIn />
        <PasswordRedirect />
      </LogInContainer>
      <HeroLogIn type="login" />
    </LogInWrapper>
  );
}

export default MainLogIn;

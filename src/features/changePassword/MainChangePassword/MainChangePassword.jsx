import React from "react";
import {
  LogInContainer,
  LogInWrapper,
  Logo,
  LogoText,
} from "../../login/MainLogIn/MainLogIn.style";
import FooterLogIn from "../../login/FooterLogIn/FooterLogIn";
import HeroLogIn from "../../login/HeroLogIn/HeroLogIn";
import logo from "../../../assets/images/logo.png";
import FromChangePassword from "../FormChangePassword/FromChangePassword";
import { ChangeContainer } from "./MainChangePassword.style";
import FooterRegister from "../../register/FooterRegister/FooterRegister";
import { BoxControler } from "./MainChangePassword.style";

function MainChangePassword() {
  return (
    <LogInWrapper>
      <HeroLogIn />
      <ChangeContainer>
        <BoxControler>
          <Logo src={logo} />
          <LogoText>The only place for all your finances!</LogoText>
        </BoxControler>
        <FromChangePassword />
        <BoxControler>
          <FooterLogIn />
          <FooterRegister passChange={"passChange"} />
        </BoxControler>
      </ChangeContainer>
    </LogInWrapper>
  );
}

export default MainChangePassword;

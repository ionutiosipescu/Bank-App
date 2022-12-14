import React from "react";
import FormRegister from "../FormRegister/FormRegister";
import FooterRegister from "../FooterRegister/FooterRegister";
import HeroRegister from "../HeroRegister/HeroRegister";
import { RegisterWrapper, RegisterContainer } from "./MainRegister.style";

function MainRegister() {
  return (
    <RegisterWrapper>
      <RegisterContainer>
        <FormRegister />
        <FooterRegister />
      </RegisterContainer>
      <HeroRegister />
    </RegisterWrapper>
  );
}

export default MainRegister;

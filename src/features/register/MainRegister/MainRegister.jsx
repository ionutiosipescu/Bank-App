import React from "react";
import FormRegister from "../FormRegister/FormRegister";
import FooterRegister from "../FooterRegister/FooterRegister";
import HeroRegister from "../HeroRegister/HeroRegister";
import { RegisterWrapper, RegisterContainer } from "./MainRegister.style";
import { useSelector } from "react-redux";
import { selectStep } from "../../../state-management/registerhelper/registerhelper.selector";
import SuccesLink from "../SuccesLink/SuccesLink";

function MainRegister() {
  const step = useSelector(selectStep);
  return (
    <RegisterWrapper>
      <RegisterContainer>
        <FormRegister />
        {step === 4 ? <SuccesLink /> : <FooterRegister />}
      </RegisterContainer>
      <HeroRegister />
    </RegisterWrapper>
  );
}

export default MainRegister;

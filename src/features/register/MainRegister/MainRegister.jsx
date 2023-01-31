import React from "react";
import FormRegister from "../FormRegister/FormRegister";
import FooterRegister from "../FooterRegister/FooterRegister";
import HeroRegister from "../HeroRegister/HeroRegister";
import {
  MainRegisterWrapper,
  MainRegisterContainer,
  MainRegisterContainerPlan,
  HeroBox,
} from "./MainRegister.style";
import { useSelector } from "react-redux";
import { selectStep } from "../../../state-management/Auth/registerhelper/registerhelper.selector";
import SuccesLink from "../SuccesLink/SuccesLink";
import MultiStepProgressBar from "../../../components/MultiStepProgressBar/MultiStepProgressBar";

function MainRegister() {
  const step = useSelector(selectStep);
  return (
    <MainRegisterWrapper>
      <MainRegisterContainer>
        <MultiStepProgressBar />
        <FormRegister />
        {step === 4 ? <SuccesLink /> : <FooterRegister />}
      </MainRegisterContainer>
      {step === 2 ? <></> : <HeroRegister />}
    </MainRegisterWrapper>
  );
}

export default MainRegister;

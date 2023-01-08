import React from "react";
import FormRegister from "../FormRegister/FormRegister";
import FooterRegister from "../FooterRegister/FooterRegister";
import HeroRegister from "../HeroRegister/HeroRegister";
import {
  MainRegisterWrapper,
  MainRegisterContainer,
  MainRegisterContainerPlan,
} from "./MainRegister.style";
import { useSelector } from "react-redux";
import { selectStep } from "../../../state-management/registerhelper/registerhelper.selector";
import SuccesLink from "../SuccesLink/SuccesLink";

function MainRegister() {
  const step = useSelector(selectStep);
  let MainRegisterStyle;
  switch (step) {
    // case 2:
    //   MainRegisterStyle = MainRegisterContainerPlan;
    //   break;
    // case 3:
    //   MainRegisterStyle = MainRegisterContainerPlan;
    //   break;
    default:
      MainRegisterStyle = MainRegisterContainer;
  }
  return (
    <MainRegisterWrapper>
      <MainRegisterStyle>
        <FormRegister />
        {step === 4 ? <SuccesLink /> : <FooterRegister />}
      </MainRegisterStyle>
      {step === 2 ? <></> : <HeroRegister />}
    </MainRegisterWrapper>
  );
}

export default MainRegister;

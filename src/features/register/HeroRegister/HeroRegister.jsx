import React from "react";
import illustration from "../../../assets/images/register.webp";
import { HeroCard, HeroCardConfirm } from "./HeroRegister.style";
import { useSelector } from "react-redux";
import { selectStep } from "../../../state-management/registerhelper/registerhelper.selector";

function HeroRegister() {
  const step = useSelector(selectStep);
  return (
    <>
      {step === 3 ? (
        <HeroCardConfirm>
          <img src={illustration} alt="" />
        </HeroCardConfirm>
      ) : (
        <HeroCard>
          <img src={illustration} alt="" />
        </HeroCard>
      )}
    </>
  );
}

export default HeroRegister;

import React from "react";
import illustration from "../../../assets/images/register.webp";
import { HeroCard, HeroCardConfirm } from "./HeroRegister.style";
import { useSelector } from "react-redux";
import { selectStep } from "../../../state-management/Auth/registerhelper/registerhelper.selector";

function HeroRegister() {
  const step = useSelector(selectStep);
  // let HeroCardStyle;
  // switch (step) {
  //   case 3:
  //     HeroCardStyle = HeroCardConfirm;
  //     break;
  //   default:
  //     HeroCardStyle = HeroCard;
  // }
  return (
    <>
      <HeroCard>
        <img src={illustration} alt="" />
      </HeroCard>
    </>
  );
}

export default HeroRegister;

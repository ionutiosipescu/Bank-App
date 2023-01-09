import React from "react";
import { FooterControlPages } from "../FormRegister/FormRegister.style";
import NextBtn from "../../../components/StepButtons/NextBtn";
import PrevBtn from "../../../components/StepButtons/PrevBtn";
import { useSelector } from "react-redux";
import { selectStep } from "../../../state-management/registerhelper/registerhelper.selector";

function FooterControl() {
  const step = useSelector(selectStep);
  return (
    <FooterControlPages>
      {step === 0 ? <></> : <PrevBtn />}
      <NextBtn />
    </FooterControlPages>
  );
}

export default FooterControl;

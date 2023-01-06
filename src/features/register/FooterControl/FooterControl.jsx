import React from "react";
import { FooterControlPages } from "../FormRegister/FormRegister.style";
import NextBtn from "../../../components/StepButtons/NextBtn";
import PrevBtn from "../../../components/StepButtons/PrevBtn";

function FooterControl() {
  return (
    <FooterControlPages>
      <PrevBtn />
      <NextBtn />
    </FooterControlPages>
  );
}

export default FooterControl;

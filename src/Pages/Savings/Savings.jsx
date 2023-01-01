import React from "react";
import SavingsListCard from "../../components/SavingsListCard/SavingsListCard";
import SavingsInputCard from "./../../components/SavingsInputCard/SavingsInputCard";
import { SavingsWrapper } from "./Savings.style";

function Savings() {
  return (
    <SavingsWrapper>
      <SavingsListCard />
      <SavingsInputCard />
    </SavingsWrapper>
  );
}

export default Savings;

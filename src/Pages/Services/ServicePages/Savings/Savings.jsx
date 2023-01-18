import React from "react";
import SavingsListCard from "../../../../features/savings/SavingsListCard/SavingsListCard";
import SavingsInputCard from "../../../../features/savings/SavingsInputCard/SavingsInputCard";
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

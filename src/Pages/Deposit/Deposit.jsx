import React from "react";
import { DepositWrapper } from "./Deposit.style";
import DepositsControlerCard from "../../features/deposits/DepositsControlerCard/DepositsControlerCard";
import DepositsListCard from "../../features/deposits/DepositsListCard/DepositsListCard";

function Deposit() {
  return (
    <DepositWrapper>
      <DepositsListCard />
      <DepositsControlerCard />
    </DepositWrapper>
  );
}

export default Deposit;

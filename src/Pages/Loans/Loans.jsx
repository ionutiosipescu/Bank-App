import React from "react";
import { LoansWrapper } from "./Loans.style";
import LoansFormCard from "../../features/loans/LoansFormCard/LoansFormCard";
import LoansCalculatorCard from "../../features/loans/LoansCalculatorCard/LoansCalculatorCard";

function Loans() {
  return (
    <>
      <LoansWrapper>
        <LoansFormCard />
        <LoansCalculatorCard />
      </LoansWrapper>
    </>
  );
}
export default Loans;

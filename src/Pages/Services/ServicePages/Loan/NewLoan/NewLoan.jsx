import React from "react";
import { LoansWrapper } from "./NewLoan.style";
import LoansFormCard from "../../../../../features/loans/LoansFormCard/LoansFormCard";
import LoansCalculatorCard from "../../../../../features/loans/LoansCalculatorCard/LoansCalculatorCard";

function NewLoan() {
  return (
    <>
      <LoansWrapper>
        <LoansFormCard />
        <LoansCalculatorCard />
      </LoansWrapper>
    </>
  );
}
export default NewLoan;

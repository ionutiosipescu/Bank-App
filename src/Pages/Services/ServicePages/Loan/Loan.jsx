import React from "react";
import HisotryViewLoans from "./HystoryViewLoans/HystoryViewLoans";
import { loansArr } from "../../../../utils/data/dummyData";

function Loan() {
  return (
    <>
      <HisotryViewLoans dataServices={loansArr} />
    </>
  );
}

export default Loan;

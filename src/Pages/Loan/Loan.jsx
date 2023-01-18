import React from "react";
import TransfersView from "../TransfersView/TransfersView";
import { loansArr } from "../../utils/data/dummyData";

function Loan() {
  return (
    <>
      <TransfersView dataServices={loansArr} />
    </>
  );
}

export default Loan;

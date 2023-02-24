import React from "react";
import { useSelector } from "react-redux";
import { selectLoanStatus } from "../../../state-management/Dashboard/services/loan/loan.selector";
import { selectCheckedData } from "../../../state-management/Dashboard/services/loan/loan.selector";

function LoanStatusTitle() {
  const loanStatus = useSelector(selectLoanStatus);
  const checkedData = useSelector(selectCheckedData);
  const { details } = checkedData;

  let titleStatus;
  switch (loanStatus) {
    case "approved":
      // prettier-ignore
      titleStatus = `Your ${`${details}`.charAt(0).toUpperCase() + `${details}`.slice(1) } loan was accepted!`;
      break;
    case "salary":
      titleStatus = `Unfortunately your loan was not accepted.`;
      break;
    default:
      titleStatus = `You reached your limit`;
  }
  return <h1>{titleStatus}</h1>;
}

export default LoanStatusTitle;

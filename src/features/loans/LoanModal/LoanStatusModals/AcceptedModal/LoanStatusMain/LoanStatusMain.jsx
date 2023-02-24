import React from "react";
import LoanApproved from "../LoanApproved/LoanApproved";
import LoanDeclineIncome from "../LoanDeclineIncome/LoanDeclineIncome";
import LoanDeclineLimit from "../LoanDeclineLimit/LoanDeclineLimit";
import LoanRequestDetails from "../LoanRequestDetails/LoanRequestDetails";
import { selectLoanStatus } from "../../../../../../state-management/Dashboard/services/loan/loan.selector";
import { useSelector } from "react-redux";

function LoanStatusMain() {
  const loanStatus = useSelector(selectLoanStatus);

  let loanStatusComponent;
  switch (loanStatus) {
    case "pending":
      loanStatusComponent = <LoanRequestDetails />;
      break;
    case "approved":
      loanStatusComponent = <LoanApproved />;
      break;
    case "salary":
      loanStatusComponent = <LoanDeclineIncome />;
      break;
    case "limit":
      loanStatusComponent = <LoanDeclineLimit />;
      break;
    default:
      loanStatusComponent = <LoanRequestDetails />;
  }
  return <>{loanStatusComponent}</>;
}

export default LoanStatusMain;

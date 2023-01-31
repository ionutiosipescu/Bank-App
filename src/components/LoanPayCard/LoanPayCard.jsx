import React from "react";
import { PayContainer } from "./LoanPayCard.style";
import Input from "./../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useDispatch } from "react-redux";
import { fetchPayLoanAsync } from "../../state-management/Dashboard/services/loans/loans.action";
import { useSelector } from "react-redux";
import { selectLoansArr } from "../../state-management/Dashboard/services/loans/loans.selector";
import { selectHistoryLoans } from "../../state-management/Dashboard/services/loans/loans.selector";

function LoanPayCard({ data, ...props }) {
  const historyLoansArr = useSelector(selectHistoryLoans);
  const loansArr = useSelector(selectLoansArr);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(fetchPayLoanAsync(data, loansArr, historyLoansArr));
    // console.log(data);
  };

  return (
    <PayContainer>
      <h2>Make a payment for your {data ? data.details : ""} Loan</h2>
      <div>{data?.rate}</div>
      <Button
        label="Pay"
        size="lg"
        primary="primary"
        handleClick={handleSubmit}
      />
    </PayContainer>
  );
}

export default LoanPayCard;

import React from "react";
import {
  PayContainer,
  PayLoanContainer,
  LoanDetails,
  LoanSpecifications,
  BoldDetailLoan,
  ButtonLoan,
  ImgLoan,
} from "./LoanPayCard.style";
import Input from "./../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useDispatch } from "react-redux";
import { fetchPayLoanAsync } from "../../state-management/Dashboard/services/loans/loans.action";
import { useSelector } from "react-redux";
import { selectLoansArr } from "../../state-management/Dashboard/services/loans/loans.selector";
import { selectHistoryLoans } from "../../state-management/Dashboard/services/loans/loans.selector";
import loanpay from "../../assets/images/loanpay.png";
import { Type } from "@sinclair/typebox";

function LoanPayCard({ data, ...props }) {
  const { handleModalClose } = props;

  const { details, loan, rate } = data ? data : "";
  const historyLoansArr = useSelector(selectHistoryLoans);
  const loansArr = useSelector(selectLoansArr);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(fetchPayLoanAsync(data, loansArr, historyLoansArr));
    handleModalClose();
  };
  console.log(data);

  return (
    <PayContainer>
      <PayLoanContainer>
        <LoanDetails>
          <h3>Loan Details:</h3>
          <LoanSpecifications>
            <span>
              Type Of Loan: <BoldDetailLoan>{details}</BoldDetailLoan>
            </span>
            <span>
              Principal Amount: <BoldDetailLoan>{loan}</BoldDetailLoan>
            </span>
            <span>
              Monthly Payment: <BoldDetailLoan>{rate}</BoldDetailLoan>
            </span>
          </LoanSpecifications>
          <p>
            Please confirm your monthly loan payment of {""}
            <BoldDetailLoan>{rate}</BoldDetailLoan> for the principal amount of{" "}
            {""}
            <BoldDetailLoan>{loan}</BoldDetailLoan>. By confirming, you are
            agreeing to make this payment on the due date each month until the
            loan is fully paid off.
          </p>
          <ButtonLoan
            label="Pay Loan"
            primary="primary"
            handleClick={handleSubmit}
          />
        </LoanDetails>{" "}
        <img src={loanpay} alt="" />
      </PayLoanContainer>
    </PayContainer>
  );
}

export default LoanPayCard;

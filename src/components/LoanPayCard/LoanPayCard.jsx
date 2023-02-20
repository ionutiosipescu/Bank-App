import React from "react";
// Style
import { PayContainer, BoldDetailLoan } from "./LoanPayCard.style";
import {
  ButtonsContainer,
  DetailPill,
  DetailsContainer,
  DetailSection,
  MidContainer,
} from "../../features/loans/LoanModal/LoanStatusModals/AcceptedModal/AcceptedModal.style";

// Components
import loanpay from "../../assets/images/loanpay-2.png";
import Button from "../UI/Button/Button";

// State/Redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchPayLoanAsync } from "../../state-management/Dashboard/services/loan/loan.service";
import { selectLoansArr } from "../../state-management/Dashboard/services/loan/loan.selector";
import { selectHistoryLoans } from "../../state-management/Dashboard/services/loan/loan.selector";

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
      <h1>Loan Details</h1>
      <MidContainer>
        <DetailsContainer>
          <DetailSection>
            <DetailPill type="text">Type Of Loan:</DetailPill>
            <DetailPill type="number">
              {`${details}`.charAt(0).toUpperCase() + `${details}`.slice(1)}
              {/* {details} */}
            </DetailPill>
          </DetailSection>
          <DetailSection>
            <DetailPill type="text">Principal Amount:</DetailPill>
            <DetailPill type="number">{loan} RON</DetailPill>
          </DetailSection>
          <DetailSection>
            <DetailPill type="text">Monthly Payment:</DetailPill>
            <DetailPill type="number">{rate} RON</DetailPill>
          </DetailSection>
        </DetailsContainer>

        <img src={loanpay} alt="" />
      </MidContainer>
      <p>
        Please confirm your monthly loan payment of {""}
        <BoldDetailLoan>{rate}</BoldDetailLoan> for the principal amount of {""}
        <BoldDetailLoan>{loan}</BoldDetailLoan>.
        <br />
        <br />
        By confirming, you are agreeing to make this payment on the due date
        each month until the loan is fully paid off.
      </p>
      <ButtonsContainer>
        <Button
          label="Pay Loan"
          size="md"
          primary="primary"
          handleClick={handleSubmit}
        />
        <Button
          label="Close"
          size="md"
          primary="primary"
          handleClick={handleSubmit}
        />
      </ButtonsContainer>
    </PayContainer>
  );
}

export default LoanPayCard;

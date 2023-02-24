import React, { useEffect, useState } from "react";
// Style
import { DeclinedContainer } from "./DeclinedModal.style";
import {
  ButtonsContainer,
  DetailPill,
  DetailsContainer,
  DetailSection,
  InputContainer,
  LoanModalWrapper,
  MidContainer,
} from "./AcceptedModal.style";
// Components
import Button from "../../../../../components/UI/Button/Button";

// State / Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchLoanCreate } from "../../../../../state-management/Dashboard/services/loan/loan.service";
import {
  selectCheckedData,
  selectLoansArr,
} from "../../../../../state-management/Dashboard/services/loan/loan.selector";
import { selectCurrentUser } from "../../../../../state-management/Dashboard/userData/userData.selector";
import { PayContainer } from "../../../../../components/LoanPayCard/LoanPayCard.style";
import LoanStatusTitle from "../../../LoanStatusTitle/LoanStatusTitle";
import LoanApproved from "./LoanApproved/LoanApproved";
import LoanDeclineIncome from "./LoanDeclineIncome/LoanDeclineIncome";
import LoanDeclineLimit from "./LoanDeclineLimit/LoanDeclineLimit";
import LoanStatusMain from "./LoanStatusMain/LoanStatusMain";
import { selectLoanStatus } from "../../../../../state-management/Dashboard/services/loan/loan.selector";

function LoanStatusModal({ ...props }) {
  const { handleClick } = props;

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const checkedData = useSelector(selectCheckedData);
  const loans = useSelector(selectLoansArr);
  const loanStatus = useSelector(selectLoanStatus);

  const handleSubmit = () => {
    dispatch(fetchLoanCreate(currentUser, checkedData));
  };

  return (
    <LoanModalWrapper>
      <LoanStatusTitle />
      <LoanStatusMain />
      <ButtonsContainer>
        <Button
          size="md"
          primary="primary"
          label="Accept"
          type="button"
          onClick={() => {
            props.handleClick();
            handleSubmit();
          }}
          disabled={loanStatus === "approved" ? false : true}
        />
        <Button
          size="md"
          primary="primary"
          label="Close"
          type="button"
          onClick={handleClick}
        />
      </ButtonsContainer>
    </LoanModalWrapper>
  );
}

export default LoanStatusModal;

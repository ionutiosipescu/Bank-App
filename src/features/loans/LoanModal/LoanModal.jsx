import React from "react";
import { useEffect } from "react";
import Button from "../../../components/UI/Button/Button";
import {
  ButtonsContainer,
  DetailPill,
  DetailsContainer,
  DetailSection,
  InputContainer,
  LoanModalContainer,
  MidContainer,
} from "./LoanModal.style";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import { selectCheckedData } from "../../../state-management/Dashboard/services/loans/loans.selector";
import { fetchLoanCreate } from "../../../state-management/Dashboard/services/loans/loans.action";
import Input from "../../../components/UI/Input/Input";
import { useState } from "react";
import LoanStatusModal from "./LoanStatusModals/AcceptedModal/LoanStatusModal";

function LoanModal({ ...props }) {
  const { handleClick } = props;

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const checkedData = useSelector(selectCheckedData);
  const { details, loan, rate, years, salary } = checkedData;

  console.log(checkedData, "Checked");

  const handleSubmit = () => {
    dispatch(fetchLoanCreate(currentUser, checkedData));
  };

  return (
    <LoanModalContainer>
      <h1>
        {checkedData
          ? "Congrats! Your loan was approved!"
          : "Wua wua wuaaaa, too bad, you are poor and nobody loves you!"}
      </h1>
      <Button
        size="xl"
        primary="primary"
        label="Continue"
        type="button"
        onClick={() => {
          props.handleClick();
          handleSubmit();
        }}
      />
    </LoanModalContainer>
  );
}

export default LoanModal;

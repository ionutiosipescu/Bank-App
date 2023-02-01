import React from "react";
import Button from "../../../components/UI/Button/Button";
import { LoanModalContainer } from "./LoanModal.style";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import { selectCheckedData } from "../../../state-management/Dashboard/services/loans/loans.selector";
import { fetchLoanCreate } from "../../../state-management/Dashboard/services/loans/loans.action";

function LoanModal({ approved, ...props }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const checkedData = useSelector(selectCheckedData);
  const handleSubmit = () => {
    dispatch(fetchLoanCreate(currentUser, checkedData));
  };

  return (
    <LoanModalContainer>
      <h1>
        {approved === "yes"
          ? "Congrats! Your loan was approved!"
          : "Wua wua wuaaaa, too bad, you are poor and nobody loves you!"}{" "}
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

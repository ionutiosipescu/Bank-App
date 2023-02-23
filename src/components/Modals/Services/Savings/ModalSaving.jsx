import React from "react";
import { ButtonsContainer } from "../../../../features/loans/LoanModal/LoanStatusModals/AcceptedModal/AcceptedModal.style";
import Button from "../../../UI/Button/Button";
import { CornerArt } from "../../../UI/Card/Card.style";
import {
  ActionModalWrapper,
  DetailsWrapper,
  DetailsWrapperSecond,
} from "./ModalSaving.style";
import { selectSavingData } from "../../../../state-management/Dashboard/services/saving/saving.selector";
import { useSelector, useDispatch } from "react-redux";
import { selectSavingAction } from "../../../../state-management/Dashboard/services/saving/saving.selector";
import { fetchSavingTopUp } from "../../../../state-management/Dashboard/services/saving/saving.service";
import { selectSavingArr } from "../../../../state-management/Dashboard/services/saving/saving.selector";
import { fetchSavingWithdraw } from "../../../../state-management/Dashboard/services/saving/saving.service";
import { setShowModal } from "../../../../state-management/Dashboard/services/saving/saving.action";
import { useState } from "react";
import InputAmount from "./InputAmount/InputAmount";
import { Formik, Form } from "formik";
import CustomInput from "../../../CustomInputs/CustomInput";

function ModalSaving(props) {
  const dispatch = useDispatch();
  const savingTransfer = useSelector(selectSavingData);
  const savingData = useSelector(selectSavingArr);
  const action = useSelector(selectSavingAction);
  const [amount, setAmount] = useState("");
  const { date, details, id, transfer } = savingTransfer;

  const handelAccept = () => {
    action === "top-up"
      ? dispatch(fetchSavingTopUp(savingTransfer, amount, savingData))
      : dispatch(fetchSavingWithdraw(savingData, savingTransfer));

    dispatch(setShowModal(false));
    setAmount("");
  };

  const handleOnChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <ActionModalWrapper>
      <h2>Are you sure you want to {action} this saving?</h2>
      <DetailsWrapper>
        <span>
          <p>Payment Type</p>
          <h3>{`Saving`.charAt(0).toUpperCase() + `saving`.slice(1)}</h3>
        </span>
        <span>
          <p>Amount</p>
          <h3>{transfer}</h3>
        </span>
        {details && (
          <span>
            <p>Details</p>
            <h3>{details}</h3>
          </span>
        )}
        <span>
          <p>Date</p>
          <h3>{date}</h3>
        </span>
        <span>
          <p># ID </p>
          <h3>{id}</h3>
        </span>
      </DetailsWrapper>
      {action === "top-up" ? (
        <InputAmount
          small
          type="number"
          label="Amount"
          value={amount}
          onChange={handleOnChange}
        />
      ) : (
        <></>
      )}

      <p>
        If you want to go forward with the presented information please accept.
      </p>
      <ButtonsContainer>
        <Button
          label="Accept"
          size="md"
          primary="primary"
          onClick={handelAccept}
        />
        <Button
          label="Close"
          size="md"
          primary="primary"
          onClick={() => dispatch(setShowModal(false))}
        />
      </ButtonsContainer>
      <CornerArt bottom right />
    </ActionModalWrapper>
  );
}

export default ModalSaving;

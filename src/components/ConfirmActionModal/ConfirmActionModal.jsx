import React from "react";
import { ButtonsContainer } from "../../features/loans/LoanModal/LoanStatusModals/AcceptedModal/AcceptedModal.style";
import Button from "../UI/Button/Button";
import { CornerArt } from "../UI/Card/Card.style";
import {
  ActionModalWrapper,
  DetailsWrapper,
  DetailsWrapperSecond,
} from "./ConfirmActionModal.style";

function ConfirmActionModal(props) {
  const {
    action,
    type,
    text,
    amount,
    data,
    feature,
    handleClick,
    featureText,
    handleModalClose,
  } = props;
  const { date, details, id } = data;

  return (
    <ActionModalWrapper>
      <h2>
        Are you sure you want to {action} this {type}?
      </h2>
      <DetailsWrapper>
        <span>
          <p>Payment Type</p>
          <h3>{`${type}`.charAt(0).toUpperCase() + `${type}`.slice(1)}</h3>
        </span>
        {text && (
          <span>
            <p>Description</p>
            <h3>
              {text === "EuroToRon"
                ? "EUR to RON"
                : text === "RonToEuro"
                ? "RON to EUR"
                : text}
            </h3>
          </span>
        )}
        <span>
          <p>Amount</p>
          <h3>
            {amount}{" "}
            {text === "EuroToRon" ? "EUR" : text === "RonToEuro" ? "RON" : ""}
          </h3>
        </span>

        {details && (
          <span>
            <p>Details</p>
            <h3>{details}</h3>
          </span>
        )}
        {feature && (
          <span>
            <p>{featureText}</p>
            <h3>{feature}</h3>
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
      <p>
        If you want to go forward with the presented information please accept.
      </p>
      <ButtonsContainer>
        <Button
          label="Accept"
          size="md"
          primary="primary"
          onClick={handleClick}
        />
        <Button
          label="Close"
          size="md"
          primary="primary"
          onClick={handleModalClose}
        />
      </ButtonsContainer>
      <CornerArt bottom right />
    </ActionModalWrapper>
  );
}

export default ConfirmActionModal;

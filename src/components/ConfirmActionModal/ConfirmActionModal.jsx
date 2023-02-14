import React from "react";
import Button from "../UI/Button/Button";
import { CornerArt } from "../UI/Card/Card.style";
import { ActionModalWrapper, DetailsWrapper } from "./ConfirmActionModal.style";

function ConfirmActionModal(props) {
  const { action, type, text, amount, data, feature, handleClick } = props;
  const { date, details, id } = data;

  return (
    <ActionModalWrapper>
      <h2>
        Are you sure you want to {action} this {type}?
      </h2>
      <DetailsWrapper>
        <h3>Id: #{id}</h3>
        {details && <h3>`Type ${details}`</h3>}
        <h3>
          {text &&
            `Type: ${
              text === "EuroToRon"
                ? "EUR to RON"
                : text === "RonToEuro"
                ? "RON to EUR"
                : text
            }`}
        </h3>
        <h3>
          Amount: {amount}{" "}
          {text === "EuroToRon" ? "EUR" : text === "RonToEuro" ? "RON" : text}
        </h3>
        <h3>Rate: {feature}</h3>
        <h3>Date: {date}</h3>
      </DetailsWrapper>
      <Button
        label="Accept"
        size="md"
        primary="primary"
        onClick={handleClick}
      />
      <CornerArt bottom right />
    </ActionModalWrapper>
  );
}

export default ConfirmActionModal;

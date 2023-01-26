import React from "react";
import { PayContainer } from "./LoanPayCard.style";
import Input from "./../UI/Input/Input";
import Button from "../UI/Button/Button";

function LoanPayCard({ data, ...props }) {
  return (
    <PayContainer>
      <h2>Make a payment for your {data ? data.details : ""} Loan</h2>
      <Input label="Amount" small type="number" />
      <Button
        label="Pay"
        size="lg"
        primary="primary"
        handleClick={props.handleClick}
      />
    </PayContainer>
  );
}

export default LoanPayCard;

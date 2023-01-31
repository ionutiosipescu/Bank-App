import React from "react";
import { PayContainer } from "./LoanPayCard.style";
import Input from "./../UI/Input/Input";
import Button from "../UI/Button/Button";

function LoanPayCard({ data, ...props }) {
  // const handleSubmit = () => {
  //   dispatchEvent(setPayLoanAsync(data))
  // }

  return (
    <PayContainer>
      <h2>Make a payment for your {data ? data.details : ""} Loan</h2>
      {/* aici va trebui sa pun un div in loc de input deoarece userul nu are posibilitatea 
      de a alege cat va plati rata ci doar sa fie de accord cu suma prestabilita si sa accepta plata */}
      <Input label="Amount" small type="number" value="100" />
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

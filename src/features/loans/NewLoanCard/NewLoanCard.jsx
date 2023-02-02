import React from "react";
import LinkButton from "../../../components/UI/LinkButton/LinkButton";
import { NewLoanCardContainer } from "./NewLoanCard.style";

function NewLoanCard() {
  return (
    <NewLoanCardContainer>
      <img
        src="https://media.giphy.com/avatars/MyLeadGlobal/sC88PbGv7lq6.gif"
        alt=""
      />
      <h2>Want a new Loan?</h2>
      <h2>Request one here!</h2>
      <LinkButton label="Request Loan" primary="primary" />
    </NewLoanCardContainer>
  );
}

export default NewLoanCard;

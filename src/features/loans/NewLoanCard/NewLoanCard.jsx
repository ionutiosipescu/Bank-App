import React from "react";
import LinkButton from "../../../components/UI/LinkButton/LinkButton";
import { NewLoanCardContainer } from "./NewLoanCard.style";

function NewLoanCard() {
  return (
    <NewLoanCardContainer>
      <img
        src="https://cdn.dribbble.com/users/1484145/screenshots/14190768/bank_loan_4x.png"
        alt=""
      />
      <span>
        <LinkButton
          label="Request Loan"
          primary="primary"
          to="/services/loan/newloan"
        />
      </span>
    </NewLoanCardContainer>
  );
}

export default NewLoanCard;

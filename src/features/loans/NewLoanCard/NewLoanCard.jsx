import React from "react";
import LinkButton from "../../../components/UI/LinkButton/LinkButton";
import { NewLoanCardContainer } from "./NewLoanCard.style";

function NewLoanCard({ loans, ...props }) {
  return (
    <NewLoanCardContainer loans={loans}>
      <img
        src={
          loans <= 1
            ? "https://storage.googleapis.com/twg-content/original_images/case_study-02.png"
            : "https://cdn.dribbble.com/users/1484145/screenshots/14190768/bank_loan_4x.png"
        }
        alt=""
      />
      <span>
        <LinkButton
          label="Request Loan"
          primary="primary"
          size="xl"
          to="/services/loan/newloan"
        />
      </span>
    </NewLoanCardContainer>
  );
}

export default NewLoanCard;

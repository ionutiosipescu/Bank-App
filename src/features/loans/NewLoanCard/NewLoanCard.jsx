import React from "react";
import LinkButton from "../../../components/UI/LinkButton/LinkButton.tsx";
import { NewLoanCardContainer } from "./NewLoanCard.style";

import wideImg from "../assets/newLoanWide.png";
import smallImg from "../assets/newLoanSmall.webp";

function NewLoanCard({ loans, ...props }) {
  return (
    <NewLoanCardContainer loans={loans}>
      <img src={loans <= 1 ? wideImg : smallImg} alt="" />
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

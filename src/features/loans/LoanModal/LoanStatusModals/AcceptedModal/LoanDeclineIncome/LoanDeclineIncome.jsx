import React from "react";
import { MidContainer, DetailPill } from "../AcceptedModal.style";
import { DeclinedContainer, DeclinedWrapper } from "../DeclinedModal.style";

function LoanDeclineIncome() {
  return (
    <>
      <DeclinedWrapper>
        <DeclinedContainer>
          <DetailPill>
            Your annual salary does not meet are requirements for this loan
            amount.
          </DetailPill>
          <DetailPill>
            Please adjust your desired loan amount and check again.
          </DetailPill>
          <DetailPill>Thank you!</DetailPill>
        </DeclinedContainer>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/payment-declined-3328218-2809504.png"
          alt=""
        />
      </DeclinedWrapper>
    </>
  );
}

export default LoanDeclineIncome;

import React from "react";
import { MidContainer, DetailPill } from "../AcceptedModal.style";
import { DeclinedContainer } from "../DeclinedModal.style";

function LoanDeclineLimit() {
  return (
    <>
      <MidContainer>
        <DeclinedContainer>
          <DetailPill>
            Our current limit on the amount of loans you can request is 3!
          </DetailPill>
          <DetailPill>
            We will be happy to help you with a new loan when you fully pay one
            of your current ones.
          </DetailPill>
          <DetailPill>Thank you for your understanding!</DetailPill>
        </DeclinedContainer>
        <img
          src="https://img.freepik.com/free-icon/barrier_318-233590.jpg"
          alt=""
        />
      </MidContainer>
    </>
  );
}

export default LoanDeclineLimit;

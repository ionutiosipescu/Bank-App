import React from "react";
import { useSelector } from "react-redux";
import { selectCheckedData } from "../../../../../../state-management/Dashboard/services/loan/loan.selector";
import {
  MidContainer,
  DetailsContainer,
  DetailPill,
  DetailSection,
  InputContainer,
} from "../AcceptedModal.style";

function LoanRequestDetails() {
  const checkedData = useSelector(selectCheckedData);
  const { details, loan, rate, years, salary } = checkedData;

  return (
    <>
      <MidContainer>
        <DetailsContainer>
          <DetailSection>
            <DetailPill type="text">Total Loan Amount:</DetailPill>
            <DetailPill type="number">{loan} RON</DetailPill>
          </DetailSection>
          <DetailSection>
            <DetailPill type="text">Your monthly rate:</DetailPill>
            <DetailPill type="number">{rate} RON</DetailPill>
          </DetailSection>
          <DetailSection>
            <DetailPill type="text">Your Loan duration:</DetailPill>
            <DetailPill type="number">{years} Years</DetailPill>
          </DetailSection>
        </DetailsContainer>
        <img
          src={
            details === "car"
              ? "http://37.media.tumblr.com/af9d864af646109bf03c6d454c0f396d/tumblr_n3o0gyK7k31rn9vmdo1_500.gif"
              : details === "house"
              ? "https://24.media.tumblr.com/8db5d020f5c25d95b6b190f2b27bb153/tumblr_mqg6jn7SkH1rn9vmdo1_500.gif"
              : details === "travel"
              ? "http://37.media.tumblr.com/57b027cea8f8cacfd572157b510c0ad8/tumblr_n5tqedhMIP1rn9vmdo1_500.gif"
              : details === "investition"
              ? "http://moneyisle.in/wp-content/uploads/2022/03/93344-money-investment.gif"
              : details === "business"
              ? "https://i.pinimg.com/originals/51/4c/4f/514c4f3a891ffc51439d20dc145f7563.gif"
              : details == "education"
              ? "https://cdn.dribbble.com/users/1233499/screenshots/3900568/education.gif"
              : ""
          }
          alt=""
        />
      </MidContainer>
      <h3>
        Your first payment will be deducted from your account on the first day
        of the next month.
      </h3>
      <InputContainer>
        <input type="checkbox" />
        <p>
          I accept the <a href="#">Terms & Conditions</a> of this loan
        </p>
      </InputContainer>
    </>
  );
}

export default LoanRequestDetails;

import React, { useEffect, useState } from "react";
// Style
import { DeclinedContainer } from "./DeclinedModal.style";
import {
  ButtonsContainer,
  DetailPill,
  DetailsContainer,
  DetailSection,
  InputContainer,
  LoanModalWrapper,
  MidContainer,
} from "./AcceptedModal.style";
// Components
import Button from "../../../../../components/UI/Button/Button";

// State / Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchLoanCreate } from "../../../../../state-management/Dashboard/services/loans/loans.action";
import {
  selectCheckedData,
  selectLoansArr,
} from "../../../../../state-management/Dashboard/services/loans/loans.selector";
import { selectCurrentUser } from "../../../../../state-management/Dashboard/userData/userData.selector";
import { PayContainer } from "../../../../../components/LoanPayCard/LoanPayCard.style";

function LoanStatusModal({ ...props }) {
  const { handleClick } = props;

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const checkedData = useSelector(selectCheckedData);
  const loans = useSelector(selectLoansArr);
  const { details, loan, rate, years, salary } = checkedData;

  const [approved, setApproved] = useState("approved");

  const handleApproved = () => {
    if (loans.length <= 3) {
      salary > (25 / 100) * loan + loan
        ? setApproved("approved")
        : setApproved("salary");
    } else {
      setApproved("limit");
    }
  };

  useEffect(() => {
    handleApproved();
  }, [checkedData]);

  const handleSubmit = () => {
    dispatch(fetchLoanCreate(currentUser, checkedData));
  };

  return (
    <LoanModalWrapper>
      <h1>
        {approved === "approved"
          ? `Your ${
              `${details}`.charAt(0).toUpperCase() + `${details}`.slice(1)
            } loan was
        accepted!`
          : approved === "salary"
          ? `Unfortunately your loan was not accepted.`
          : `You reached your limit`}
      </h1>
      {approved === "approved" ? (
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
            Your first payment will be deducted from your account on the first
            day of the next month.
          </h3>
          <InputContainer>
            <input type="checkbox" />
            <p>
              I accept the <a href="#">Terms & Conditions</a> of this loan
            </p>
          </InputContainer>
        </>
      ) : approved === "salary" ? (
        <>
          <MidContainer>
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
          </MidContainer>
        </>
      ) : (
        <>
          <MidContainer>
            <DeclinedContainer>
              <DetailPill>
                Our current limit on the amount of loans you can request is 3!
              </DetailPill>
              <DetailPill>
                We will be happy to help you with a new loan when you fully pay
                one of your current ones.
              </DetailPill>
              <DetailPill>Thank you for your understanding!</DetailPill>
            </DeclinedContainer>
            <img
              src="https://img.freepik.com/free-icon/barrier_318-233590.jpg"
              alt=""
            />
          </MidContainer>
        </>
      )}
      <ButtonsContainer>
        <Button
          size="md"
          primary="primary"
          label="Continue"
          type="button"
          onClick={() => {
            props.handleClick();
            handleSubmit();
          }}
          disabled={approved === "approved" ? false : true}
        />
        <Button
          size="md"
          primary="primary"
          label="Close"
          type="button"
          onClick={handleClick}
        />
      </ButtonsContainer>
    </LoanModalWrapper>
  );
}

export default LoanStatusModal;

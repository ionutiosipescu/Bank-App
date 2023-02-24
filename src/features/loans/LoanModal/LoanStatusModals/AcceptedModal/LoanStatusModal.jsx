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
import { fetchLoanCreate } from "../../../../../state-management/Dashboard/services/loan/loan.service";
import {
  selectCheckedData,
  selectLoansArr,
} from "../../../../../state-management/Dashboard/services/loan/loan.selector";
import { selectCurrentUser } from "../../../../../state-management/Dashboard/userData/userData.selector";
import { PayContainer } from "../../../../../components/LoanPayCard/LoanPayCard.style";
import LoanStatusTitle from "../../../LoanStatusTitle/LoanStatusTitle";
import LoanApproved from "./LoanApproved/LoanApproved";
import LoanDeclineIncome from "./LoanDeclineIncome/LoanDeclineIncome";

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
      <LoanStatusTitle approved={approved} details={details} />
      {approved === "approved" ? (
        <>
          <LoanApproved />
        </>
      ) : approved === "salary" ? (
        <>
          <LoanDeclineIncome />
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
          label="Accept"
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

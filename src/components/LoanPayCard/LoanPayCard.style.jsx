import styled from "styled-components";
import Button from "../UI/Button/Button";

export const PayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

export const PayLoanContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  img {
    width: 55%;
  }
`;
export const LoanDetails = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  h3 {
    font-size: 30px;
  }
  p {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

export const LoanSpecifications = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 30px 0;
`;

export const BoldDetailLoan = styled.span`
  font-weight: bold;
`;

export const ButtonLoan = styled(Button)`
  font-size: 20px;
`;

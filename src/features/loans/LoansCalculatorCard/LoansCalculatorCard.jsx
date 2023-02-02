import React from "react";
import { ServiceInputsCardLoans } from "../../../components/UI/Card/Card.style";
import {
  InputContainer,
  InputWrapperLoans,
} from "../../savings/SavingsInputCard/SavingsInputCard.style";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import { useState } from "react";
import {
  LoanAmountContainer,
  LoanElementContainer,
} from "./LoansCalculatorCard.style";

function LoansCalculatorCard() {
  const [loanAmount, setLoanAmount] = useState(1000);
  const [years, setYears] = useState(1);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [commission, setCommission] = useState(0);

  const handleLoanAmountChange = (event) => {
    const amount = event.target.value;
    setLoanAmount(amount);
    calculatePayments(amount, years);
  };

  const handleYearsChange = (event) => {
    const numYears = event.target.value;
    setYears(numYears);
    calculatePayments(loanAmount, numYears);
  };

  const roundNumbers = (num) => {
    return Math.round(num * 100) / 100;
  };

  const calculatePayments = (amount, years) => {
    const monthlyRate = 0.01; // some interest rate
    const numPayments = years * 12;

    const monthly =
      (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
    const total = monthly * numPayments;
    const com = total - amount;
    setMonthlyPayment(roundNumbers(monthly).toLocaleString());
    setTotalPayment(roundNumbers(total).toLocaleString());
    setCommission(roundNumbers(com).toLocaleString());
  };

  return (
    <ServiceInputsCardLoans>
      <h2>Loans Calculator</h2>
      <InputWrapperLoans>
        <InputContainer>
          <LoanElementContainer>
            <label>Amount:</label>
            <input
              type="range"
              min="1000"
              max="100000"
              value={loanAmount}
              onChange={handleLoanAmountChange}
            />
            <span>{loanAmount}</span>
          </LoanElementContainer>
          <LoanElementContainer>
            <label>Years:</label>
            <input
              type="range"
              min="1"
              max="30"
              value={years}
              onChange={handleYearsChange}
            />
            <span>{years}</span>
          </LoanElementContainer>
          <LoanElementContainer>
            <label>Payment:</label>
            <span>{monthlyPayment}</span>
          </LoanElementContainer>
          <LoanElementContainer>
            <label>Total Payment:</label>
            <span>{totalPayment}</span>
          </LoanElementContainer>
          <LoanElementContainer>
            <label>Commission:</label>
            <span>{commission}</span>
          </LoanElementContainer>
        </InputContainer>
        {/* <Button size={"xl"} type="submit" label="Request Loan" /> */}
      </InputWrapperLoans>
    </ServiceInputsCardLoans>
  );
}

export default LoansCalculatorCard;

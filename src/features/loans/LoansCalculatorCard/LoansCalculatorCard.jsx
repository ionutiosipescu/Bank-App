import React from "react";
import { ServiceInputsCard } from "../../../components/UI/Card/Card.style";
import {
  InputContainer,
  InputWrapper,
} from "../../savings/SavingsInputCard/SavingsInputCard.style";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";

function LoansCalculatorCard() {
  return (
    <ServiceInputsCard>
      <h2>Loans Calculator</h2>
      <InputWrapper>
        <InputContainer>
          <Input label="Saving Purpose" type="text" large />
          <Input label="Saving Target" type="text" large />
          <Input label="First Top-up" type="number" large />
        </InputContainer>
        <Button label="Add Saving" size="md" primary={true} />
      </InputWrapper>
    </ServiceInputsCard>
  );
}

export default LoansCalculatorCard;

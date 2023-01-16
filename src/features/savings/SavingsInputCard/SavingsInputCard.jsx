import React from "react";
import Button from "../../../components/UI/Button/Button";
import { ServiceInputsCard } from "../../../components/UI/Card/Card.style";
import Input from "../../../components/UI/Input/Input";
import {
  InputCardSection,
  InputContainer,
  InputWrapper,
} from "./SavingsInputCard.style";

function SavingsInputCard() {
  return (
    <ServiceInputsCard type="savings">
      <h2>New Saving</h2>
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

export default SavingsInputCard;

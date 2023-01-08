import React from "react";
import Button from "../../../components/UI/Button/Button";
import { ServiceInputsCard } from "../../../components/UI/Card/Card.style";
import Input from "../../../components/UI/Input/Input";
import { InputCardSection, InputContainer } from "./SavingsInputCard.style";

function SavingsInputCard() {
  return (
    <ServiceInputsCard>
      <h2>New Saving</h2>
      <InputContainer>
        <Input label="Name" type="text" large />
        <Input label="Saving Target" type="text" large />
        <Input label="Saving Purpose" type="text" large />
        <Input label="First Top-up" type="number" large min="0" />
      </InputContainer>
      <Button label="Add Saving" size="md" primary={true} />
    </ServiceInputsCard>
  );
}

export default SavingsInputCard;

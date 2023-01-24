import React from "react";
import Button from "../../../components/UI/Button/Button";
import { ServiceInputsCard } from "../../../components/UI/Card/Card.style";
import Input from "../../../components/UI/Input/Input";
import { InputContainer } from "../../../components/SavingsInputCard/SavingsInputCard.style";
import DropDown from "../../../components/DropDown/DropDown";

import { euroRate } from "../../../utils/data/dummyData";
import { InfoSection } from "./ExchangeInputCard.style";

function ExchangeInputCard() {
  return (
    <ServiceInputsCard>
      <h2>New Exchange</h2>
      <InputContainer>
        <InfoSection>
          <DropDown label="From" items={["EUR", "RON"]} />
          <DropDown label="To" items={["EUR", "RON"]} />
        </InfoSection>
        <Input label="Amount" type="number" large />
        <Input label="Saving Purpose" type="text" large />
      </InputContainer>
      <Button label="Add Saving" size="md" primary="primary" />
    </ServiceInputsCard>
  );
}

export default ExchangeInputCard;

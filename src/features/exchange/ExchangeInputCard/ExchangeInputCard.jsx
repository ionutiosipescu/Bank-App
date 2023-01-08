import React from "react";
import Button from "../../../components/UI/Button/Button";
import { ServiceInputsCard } from "../../../components/UI/Card/Card.style";
import Input from "../../../components/UI/Input/Input";
import { InputContainer } from "../../savings/SavingsInputCard/SavingsInputCard.style";
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
        <Input label="Amount to exchange" type="number" large />
        <Input label="Amount exchanged" type="number" large />
      </InputContainer>
      <Button label="Exchange" size="xl" primary={true} />
    </ServiceInputsCard>
  );
}

export default ExchangeInputCard;

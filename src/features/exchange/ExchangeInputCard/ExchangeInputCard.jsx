import React from "react";
import Button from "../../../components/UI/Button/Button";
import { ServiceInputsCard } from "../../../components/UI/Card/Card.style";
import Input from "../../../components/UI/Input/Input";
import DropDown from "../../../components/DropDown/DropDown";

import { ExchangeInputContainer, InfoSection } from "./ExchangeInputCard.style";

function ExchangeInputCard() {
  return (
    <ServiceInputsCard type="exchange">
      <h2>New Exchange</h2>
      <ExchangeInputContainer>
        <InfoSection>
          <DropDown label="From" items={["EUR", "RON"]} />
          <Input label="Amount" type="number" min="0" large />
        </InfoSection>
        <InfoSection>
          <DropDown label="To" items={["EUR", "RON"]} />
          <Input label="Amount" type="number" min="0" large />
        </InfoSection>
      </ExchangeInputContainer>
      <Button label="Exchange" size="xl" primary={true} />
    </ServiceInputsCard>
  );
}

export default ExchangeInputCard;

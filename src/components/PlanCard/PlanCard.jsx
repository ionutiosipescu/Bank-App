import React from "react";
import {
  Bubble,
  PlanContainer,
  PlanHeader,
  PlanSection,
} from "./PlanCard.style";

import Button from "./../UI/Button/Button";

function PlanCard(props) {
  const { plan } = props;

  return (
    <PlanContainer>
      <PlanSection>
        <PlanHeader>
          <h4>Your Plan</h4>
          <h2>{plan.toUpperCase()}</h2>
        </PlanHeader>
        <ul>
          <li>
            <h3>Card limit - € 150,000</h3>
          </li>
          <li>
            <h3>Loan limit - € 100,000</h3>
          </li>
        </ul>
        <p>
          Upgrade Plan to get a greater limit o your card and the ability to
          apply for bigger loans!
        </p>
      </PlanSection>
      <Button label="Upgrade" size="sm" />
      <Bubble top />
      <Bubble mid />
      <Bubble />
    </PlanContainer>
  );
}

export default PlanCard;

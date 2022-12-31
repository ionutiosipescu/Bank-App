import React from "react";
import { Bubble, PlanContainer, PlanSection } from "./PlanCard.style";

import Button from "./../UI/Button/Button";

import { plans } from "../../utils/data/dummyData";

const plan = plans[0];

function PlanCard() {
  return (
    <PlanContainer>
      <PlanSection>
        <div>
          <h4>Your Plan</h4>
          <h2>{plan.name}</h2>
        </div>
        <ul>
          <li>
            <h3>Card limit - € {plan.cardLimit}</h3>
          </li>
          <li>
            <h3>Loan limit - € {plan.loanLimit}</h3>
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

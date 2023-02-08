import React from "react";
import {
  Bubble,
  PlanContainer,
  PlanHeader,
  PlanOptions,
  PlanSection,
} from "./PlanCard.style";

import Button from "./../UI/Button/Button";
import { options } from "./../../utils/data/plancardregisterData";
import { useSelector } from "react-redux";
import { selectCurrentCardEdit } from "./../../state-management/Dashboard/cards/cards.selector";

function PlanCard(props) {
  const { plan } = props;

  const cardEdit = useSelector(selectCurrentCardEdit);
  const { type_of_plan } = cardEdit;

  const { value, price, planName, currency, details } =
    options[
      type_of_plan === "standard" ? 0 : type_of_plan === "premium" ? 1 : 2
    ];

  console.log(options);

  return (
    <PlanContainer plan={value}>
      <PlanSection>
        <PlanHeader>
          <h4>Your Plan</h4>
          <h2>{planName.toUpperCase()}</h2>
        </PlanHeader>
        <PlanOptions>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>
                <p>
                  {detail.name} {detail.nr}
                </p>
              </li>
            ))}
          </ul>
        </PlanOptions>
      </PlanSection>
      {/* <Button label="Upgrade" size="sm" /> */}
      <Bubble top />
      <Bubble mid />
      <Bubble />
    </PlanContainer>
  );
}

export default PlanCard;

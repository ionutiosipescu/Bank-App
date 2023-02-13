import React from "react";
// Style
import {
  Bubble,
  PlanContainer,
  PlanHeader,
  PlanOptions,
  PlanSection,
} from "./PlanCard.style";

// Components
import LinkButton from "../UI/LinkButton/LinkButton";

// State/Redux
import { useSelector } from "react-redux";
import { selectCurrentCardEdit } from "./../../state-management/Dashboard/cards/cards.selector";
import { options } from "./../../utils/data/plancardregisterData";

function PlanCard(props) {
  const cardEdit = useSelector(selectCurrentCardEdit);
  const { type_of_plan } = cardEdit;

  const { value, planName, details } =
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
      {/* <LinkButton label="Upgrade" to="/cards" size="md" primary="primary" /> */}
      <Bubble top />
      <Bubble mid />
      <Bubble />
    </PlanContainer>
  );
}

export default PlanCard;

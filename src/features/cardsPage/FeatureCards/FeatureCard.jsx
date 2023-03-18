import React from "react";
import { FeatureCard } from "./FeatureCard.style";

import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import LinkButton from "../../../components/UI/LinkButton/LinkButton.tsx";

function FeatureCards({ type }) {
  return (
    <FeatureCard type={type}>
      <div style={{ width: "70%" }}>
        <h2>{type === "deposit" ? "Deposit" : "Withdraw"}</h2>
        <br />
        <p>
          {type === "deposit"
            ? "Ready for shopping? Top up your card here!"
            : "Need money elsewhere? Withdraw money here!"}
        </p>
      </div>
      <LinkButton to="/services/deposit" size="round">
        {type === "deposit" ? <BsArrowUp /> : <BsArrowDown />}
      </LinkButton>
    </FeatureCard>
  );
}

export default FeatureCards;

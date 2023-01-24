import React from "react";
import { FeatureCard } from "./FeatureCard.style";

import Button from "../../../components/UI/Button/Button";

import { BsArrowUp, BsArrowDown } from "react-icons/bs";

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
      <Button size="round">{type === "deposit" ? <BsArrowUp /> : <BsArrowDown />}</Button>
    </FeatureCard>
  );
}

export default FeatureCards;

import React from "react";
import { PropTypes } from "prop-types";
import { CardContainer, CardHeader } from "../UI/Card/Card.style";
import { CardBody, CardFooter, Circle, Pill } from "./BalanceCard.style";

function BalanceCard({ balance, color, name, valid, cardNum, size }) {
  return (
    <CardContainer color={color} size={size}>
      <CardHeader>
        <h2>My Balance</h2>
        <h1>{balance}</h1>
      </CardHeader>
      <CardBody>
        <h1>{cardNum}</h1>
      </CardBody>
      <CardFooter>
        <div>
          <h3>Card Holder</h3>
          <h2>{name}</h2>
        </div>
        <div>
          <h3>Valid Until</h3>
          <h2>{valid}</h2>
        </div>
      </CardFooter>
      <Circle one />
      <Circle two />
      <Pill one color={color} />
      <Pill two color={color} />
    </CardContainer>
  );
}

BalanceCard.propTypes = {
  balance: PropTypes.string,
  color: PropTypes.oneOf(["purple", "green"]),
  size: PropTypes.oneOf(["sm", "md", "fit"]),
  name: PropTypes.string,
  valid: PropTypes.string,
  cardNum: PropTypes.string,
};

export default BalanceCard;

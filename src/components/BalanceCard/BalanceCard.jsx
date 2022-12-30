import React from "react";
import { PropTypes } from "prop-types";
import { CardContainer, CardHeader } from "../UI/Card/Card.style";
import { CardBody, CardFooter, Circle, Pill } from "./BalanceCard.style";

function BalanceCard({ balance, color, name, valid, cardNum, size, onClick }) {
  return (
    <CardContainer color={color} size={size} onClick={onClick}>
      <CardHeader>
        <h3>My Balance</h3>
        <h1>{balance}</h1>
      </CardHeader>
      <CardBody>
        <h2>{cardNum}</h2>
      </CardBody>
      <CardFooter>
        <div>
          <h4>Card Holder</h4>
          <h3>{name}</h3>
        </div>
        <div>
          <h4>Valid Until</h4>
          <h3>{valid}</h3>
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

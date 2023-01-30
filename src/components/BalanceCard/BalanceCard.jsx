import React from "react";
import { PropTypes } from "prop-types";
import { CardContainer, CardHeader } from "../UI/Card/Card.style";
import { CardBody, CardFooter, Circle, Pill } from "./BalanceCard.style";

function BalanceCard({ balance, color, name, valid, cardNum, size, onClick }) {
  return (
    <CardContainer color={color} size={size} onClick={onClick}>
      <CardHeader size={size}>
        <h3>My Balance</h3>
        <h1>{balance}</h1>
      </CardHeader>
      <CardBody size={size}>
        <h2>{cardNum}</h2>
      </CardBody>
      <CardFooter size={size}>
        <div>
          <h4>Card Holder</h4>
          <h3>{name}</h3>
        </div>
        <div>
          <h4>Valid Until</h4>
          <h3>{valid}</h3>
        </div>
      </CardFooter>
      <Circle one size={size} />
      <Circle two size={size} />
      <Pill one color={color} size={size} />
      <Pill two color={color} size={size} />
    </CardContainer>
  );
}

BalanceCard.propTypes = {
  balance: PropTypes.string,
  color: PropTypes.oneOf(["purple", "yellow"]),
  size: PropTypes.oneOf(["sm", "md", "fit"]),
  name: PropTypes.string,
  valid: PropTypes.string,
  cardNum: PropTypes.string,
};

export default BalanceCard;

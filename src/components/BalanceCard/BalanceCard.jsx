import React from "react";
import { PropTypes } from "prop-types";
import { CardContainer, CardHeader } from "../UI/Card/Card.style";
import { CardBody, CardFooter, Circle, Pill } from "./BalanceCard.style";

function BalanceCard({ ...props }) {
  const {
    balance,
    color,
    name,
    valid,
    cardNum,
    size,
    onClick,
    currency,
    scale,
  } = props;

  let number = parseFloat(balance);
  let newBalance = number.toFixed(0);

  return (
    <CardContainer
      currency={currency}
      size={size}
      onClick={onClick}
      scale={scale}
    >
      <CardHeader size={size}>
        <h2>Balance</h2>
        <h1>
          {newBalance.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          {`${currency}`.toUpperCase()}
        </h1>
        <span>{}</span>
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
      <Pill one currency={currency} size={size} />
      <Pill two currency={currency} size={size} />
    </CardContainer>
  );
}

BalanceCard.propTypes = {
  balance: PropTypes.string,
  color: PropTypes.oneOf(["purple", "blue"]),
  size: PropTypes.oneOf(["sm", "md", "fit"]),
  name: PropTypes.string,
  valid: PropTypes.string,
  cardNum: PropTypes.string,
};

export default BalanceCard;

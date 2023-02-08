import React from "react";
import { PropTypes } from "prop-types";
import { CardContainer, CardHeader } from "../UI/Card/Card.style";
import { CardBody, Circle, Pill } from "./BalanceCardEmpty.style";

function BalanceCardEmpty({ ...props }) {
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
    <CardContainer currency={currency} scale={scale}>
      <CardBody>
        <h2>No Cards Available</h2>
      </CardBody>
      <Circle one size={size} />
      <Circle two size={size} />
      <Pill one currency={currency} size={size} />
      <Pill two currency={currency} size={size} />
    </CardContainer>
  );
}

BalanceCardEmpty.propTypes = {
  balance: PropTypes.string,
  color: PropTypes.oneOf(["purple", "blue"]),
  size: PropTypes.oneOf(["sm", "md", "fit"]),
  name: PropTypes.string,
  valid: PropTypes.string,
  cardNum: PropTypes.string,
};

export default BalanceCardEmpty;

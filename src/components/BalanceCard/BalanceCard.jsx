import React from "react";
import "./BalanceCard.css";
import "../UI/Card/Card.css";
import { PropTypes } from "prop-types";

function BalanceCard({ balance, color, name, valid, cardNum }) {
  return (
    <div className={`card card-sm card-${color}`}>
      <div className="card-header">
        <h2>My Balance</h2>
        <h1>{balance}</h1>
      </div>
      <div className="card-body">
        <h1>{cardNum}</h1>
      </div>
      <div className="card-footer">
        <div>
          <h3>Card Holder</h3>
          <h2>{name}</h2>
        </div>
        <div>
          <h3>Valid Until</h3>
          <h2>{valid}</h2>
        </div>
      </div>
      <div className="circle circle-one"></div>
      <div className="circle circle-two"></div>
      <div className="pill pill-one"></div>
      <div className="pill pill-two"></div>
    </div>
  );
}

BalanceCard.propTypes = {
  balance: PropTypes.string,
  color: PropTypes.oneOf(["purple", "green"]),
  name: PropTypes.string,
  valid: PropTypes.string,
  cardNum: PropTypes.string,
};

export default BalanceCard;

import React from "react";
import "./Card.css";

function Card({ children }) {
  return <div className="card card-sm">{children}</div>;
}

export default Card;

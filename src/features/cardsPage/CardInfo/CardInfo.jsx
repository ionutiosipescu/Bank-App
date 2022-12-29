import React from "react";
import { Container, InfoContainer } from "./CardInfo.style";

function CardInfo({ name, cardNumber, valid, currency }) {
  return (
    <Container>
      <h2>Card Information</h2>
      <InfoContainer>
        <div>
          <h3>Name</h3>
          <h4>{name}</h4>
        </div>
        <div>
          <h3>Card Number</h3>
          <h4>{cardNumber}</h4>
        </div>
        <div>
          <h3>Valid Until</h3>
          <h4>{valid}</h4>
        </div>
        <div>
          <h3>Currency</h3>
          <h4>{currency}</h4>
        </div>
      </InfoContainer>
    </Container>
  );
}

export default CardInfo;

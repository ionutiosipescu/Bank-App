import React from "react";
import { useSelector } from "react-redux";
import { Container, InfoContainer } from "./CardInfo.style";
import { selectUserDetail } from "./../../../state-management/Dashboard/userData/userData.selector";
import { generateRandomNumber } from "../../../utils/helpers/helperFunctions/randomNumber";
import { cardValidityGenerator } from "../../../utils/helpers/helperFunctions/cardValidityGenerator";
import { selectCurrentCardAccount } from "../../../state-management/Dashboard/cards/cards.selector";

function CardInfo() {
  const currentCardAccount = useSelector(selectCurrentCardAccount);
  const currentAccount = useSelector(selectUserDetail);
  const { first_name, last_name } = currentAccount;
  const { created_at, currency } = currentCardAccount;

  return (
    <Container>
      <h2>Card Information</h2>
      <InfoContainer>
        <div>
          <h3>Name</h3>
          <h4>{`${first_name} ${last_name}`}</h4>
        </div>
        <div>
          <h3>Card Number</h3>
          <h4>{`${generateRandomNumber(16)}`}</h4>
        </div>
        <div>
          <h3>Valid Until</h3>
          <h4>{cardValidityGenerator(created_at)}</h4>
        </div>
        <div>
          <h3>Currency</h3>
          <h4>{currency.toUpperCase()}</h4>
        </div>
      </InfoContainer>
    </Container>
  );
}

export default CardInfo;

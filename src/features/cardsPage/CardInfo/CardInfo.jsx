import React from "react";
import { useSelector } from "react-redux";
import { Container, InfoContainer } from "./CardInfo.style";
import {
  selectCurrentUser,
  selectUserDetail,
} from "./../../../state-management/Dashboard/userData/userData.selector";
import { generateRandomNumber } from "../../../utils/helpers/helperFunctions/randomNumber";
import { cardValidityGenerator } from "../../../utils/helpers/helperFunctions/cardValidityGenerator";
import { selectCurrentCardAccount } from "../../../state-management/Dashboard/cards/cards.selector";

function CardInfo() {
  const currentCardAccount = useSelector(selectCurrentCardAccount);
  const currentAccount = useSelector(selectUserDetail);
  const currentUser = useSelector(selectCurrentUser);
  const { first_name, last_name } = currentAccount;
  const { created_at, currency } = currentCardAccount;

  return (
    <Container>
      <h2>Card Information</h2>
      {currentCardAccount.length < 1 ? (
        <InfoContainer>
          <div>
            <h3>Name</h3>
            <h4>{`${first_name} ${last_name}`}</h4>
          </div>
          <div>
            <h3>Card Number</h3>
            <h4>{`${generateRandomNumber(4)} ${generateRandomNumber(
              4
            )} ${generateRandomNumber(4)} ${generateRandomNumber(4)}`}</h4>
          </div>
          <div>
            <h3>Valid Until</h3>
            <h4>{cardValidityGenerator(created_at)}</h4>
          </div>
          <div>
            <h3>Currency</h3>
            <h4>{`${currency}`.toUpperCase()}</h4>
          </div>
        </InfoContainer>
      ) : (
        <InfoContainer>
          <div>
            <h3>Name</h3>
            <h4>{`${currentUser.userDetail.first_name} ${currentUser.userDetail.last_name}`}</h4>
          </div>
          <div>
            <h3>Card Number</h3>
            <h4>{`${generateRandomNumber(4)} ${generateRandomNumber(
              4
            )} ${generateRandomNumber(4)} ${generateRandomNumber(4)}`}</h4>
          </div>
          <div>
            <h3>Valid Until</h3>
            <h4>{cardValidityGenerator(currentUser.userDetail.created_at)}</h4>
          </div>
          <div>
            <h3>Currency</h3>
            <h4>{`${currency}`.toUpperCase()}</h4>
          </div>
        </InfoContainer>
      )}
    </Container>
  );
}

export default CardInfo;

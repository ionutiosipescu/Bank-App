import React from "react";
import {
  AvailableAccountsContainer,
  NewCardAvailableContainer,
  ListContainer,
  CurrencyBox,
  ListItem,
  Title,
} from "./NewCardAvailable.style";
import BalanceCard from "../../../../../components/BalanceCard/BalanceCard";
import { accounts } from "../../../../../utils/data/dummyData";

function NewCardAvailable() {
  const data = accounts[0];

  return (
    <NewCardAvailableContainer>
      <Title>Available Accounts</Title>
      <BalanceCard
        balance="$0"
        color="purple"
        size="fit"
        name={data.owner}
        cardNum={data.cardNumber}
        valid={data.validity}
      />
      {/* currency */}
      <CurrencyBox>Euro</CurrencyBox>
      {/* Advantajes Card */}
      <AvailableAccountsContainer>
        <ListContainer>
          <ListItem>
            <span>✔3% Cashback</span>
            <span>for any markets</span>
          </ListItem>
          <ListItem>
            <span>✔Cash without commsion</span>
            <span>WorldWide</span>
          </ListItem>
          <ListItem>
            <span>✔New Card Design</span>
            <span>From 2023</span>
          </ListItem>
        </ListContainer>
      </AvailableAccountsContainer>
    </NewCardAvailableContainer>
  );
}

export default NewCardAvailable;

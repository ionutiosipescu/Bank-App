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
import Button from "../../../../../components/UI/Button/Button";
import { ButtonsContainer } from "./NewCardAvailable.style";
import { useState } from "react";

function NewCardAvailable() {
  const data = accounts[0];
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = accounts.slice(currentIndex, currentIndex + 3);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <NewCardAvailableContainer>
      <Title>Available Accounts</Title>
      <BalanceCard
        balance="0"
        currency="ron"
        size="fit"
        name={data.owner}
        cardNum={data.cardNumber}
        valid={data.validity}
      />
      {/* Buttons */}
      <ButtonsContainer>
        <Button
          handleClick={handlePrevClick}
          disabled={currentIndex === 0 ? true : false}
          size="round"
          primary="primary"
        >
          &#8592;
        </Button>
        <Button
          handleClick={handleNextClick}
          disabled={currentIndex + 3 >= accounts.length ? true : false}
          size="round"
          primary="primary"
        >
          &#8594;
        </Button>
      </ButtonsContainer>
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

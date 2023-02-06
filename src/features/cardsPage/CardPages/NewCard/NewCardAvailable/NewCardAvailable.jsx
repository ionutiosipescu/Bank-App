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
import CarouselCards from "../../../../../components/CarouselCards/CarouselCards";
import { selectCardArr } from "../../../../../state-management/Dashboard/cards/cards.selector";
import { useSelector } from "react-redux";
import filterCards from "../../../../../utils/helpers/helperFunctions/filterAvailableCards";

function NewCardAvailable() {
  const accountsArr = useSelector(selectCardArr);
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
      <CarouselCards size="sm" cardsArr={filterCards(accountsArr)} />
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

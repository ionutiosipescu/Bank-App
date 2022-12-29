import React, { useState } from "react";
import BalanceCard from "../../components/BalanceCard/BalanceCard";
import {
  CardsContainer,
  FeatureContainer,
  LeftWrapper,
  RightWrapper,
  TopContainer,
} from "./Cards.style";

import { accounts } from "../../utils/data/dummyData";
import Button from "../../components/UI/Button/Button";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import FeatureCard from "../../features/cardsPage/FeatureCards/FeatureCard";
import CardInfo from "../../features/cardsPage/CardInfo/CardInfo";

const data = accounts[0];
const data_2 = accounts[1];

function Cards() {
  const [clicked, setClicked] = useState(true);

  const handleCardChange = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <TopContainer>
        <LeftWrapper>
          <Button handleClick={handleCardChange}>
            <BsArrowLeft />
          </Button>
          <CardsContainer clicked={clicked}>
            <BalanceCard
              balance={data.balance}
              color="purple"
              size="sm"
              name={data.owner}
              cardNum={data.cardNumber}
              valid={data.validity}
            />
            <BalanceCard
              balance={data_2.balance}
              color="yellow"
              size="sm"
              name={data_2.owner}
              cardNum={data_2.cardNumber}
              valid={data_2.validity}
            />
          </CardsContainer>
          <Button handleClick={handleCardChange}>
            <BsArrowRight />
          </Button>
        </LeftWrapper>
        <RightWrapper>
          <FeatureContainer>
            <FeatureCard type="deposit" />
            <FeatureCard type="withdraw" />
          </FeatureContainer>
          <CardInfo
            name={clicked ? data_2.owner : data.owner}
            cardNumber={clicked ? data_2.cardNumber : data.cardNumber}
            valid={clicked ? data_2.validity : data.validity}
            currency={clicked ? "USD" : "EUR"}
          />
        </RightWrapper>
      </TopContainer>
      <TopContainer></TopContainer>
    </>
  );
}

export default Cards;

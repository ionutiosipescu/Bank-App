import React, { useState, useEffect } from "react";
import BalanceCard from "../../components/BalanceCard/BalanceCard";
import {
  BottomContainer,
  CardsContainer,
  FeatureContainer,
  LeftWrapper,
  RightWrapper,
  TopContainer,
  ManageAccount,
} from "./Cards.style";

import { accounts } from "../../utils/data/dummyData";
import Button from "../../components/UI/Button/Button";
import { generateRandomNumber } from "../../utils/helpers/helperFunctions/randomNumber";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import FeatureCard from "../../features/cardsPage/FeatureCards/FeatureCard";
import CardInfo from "../../features/cardsPage/CardInfo/CardInfo";
import SmallDropdown from "./../../features/cardsPage/Dropdown/Dropdown";
import NewCard from "../../features/cardsPage/CardPages/NewCard/NewCard";
import EditCard from "../../features/cardsPage/CardPages/EditCard/EditCard";
import EditController from "../../features/cardsPage/CardPages/EditCard/EditController/EditController";
import { useSelector } from "react-redux";
import { selectUserAccount } from "../../state-management/Dashboard/userData/userData.selector";
import { selectUserDetail } from "../../state-management/Dashboard/userData/userData.selector";
import { cardValidityGenerator } from "../../utils/helpers/helperFunctions/cardValidityGenerator";

const data = accounts[0];
const data_2 = accounts[1];

function Cards() {
  const [clicked, setClicked] = useState(true);
  const [selectedOption, setSelectedOption] = useState("New Account");
  const [selectedComponent, setSelectedComponent] = useState(<h1>Accounts</h1>);
  const accountsArr = useSelector(selectUserAccount);
  const currentAccount = useSelector(selectUserDetail);
  const { first_name, last_name } = currentAccount;

  const handleCardChange = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    switch (selectedOption) {
      case "New Account":
        setSelectedComponent(<NewCard />);
        break;
      case "Edit Account":
        setSelectedComponent(<EditCard />);
        break;
      default:
        setSelectedComponent(<EditCard />);
    }
  }, [selectedOption]);

  return (
    <>
      <TopContainer>
        <LeftWrapper>
          <Button handleClick={handleCardChange} size="round">
            <BsArrowLeft />
          </Button>
          <CardsContainer clicked={clicked}>
            {accountsArr.map((account, index) => (
              <BalanceCard
                key={index}
                balance={`${account.balance}`}
                currency={account.currency}
                color="yellow"
                size="sm"
                name={`${first_name} ${last_name}`}
                cardNum={generateRandomNumber(16)}
                valid={cardValidityGenerator(account.created_at)}
              />
            ))}
            {/* <BalanceCard
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
            /> */}
          </CardsContainer>
          <Button handleClick={handleCardChange} size="round">
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
      <BottomContainer>
        <ManageAccount>
          <SmallDropdown
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          {selectedOption === "Edit Account" && <EditController />}
        </ManageAccount>
        {selectedComponent}
      </BottomContainer>
    </>
  );
}

export default Cards;

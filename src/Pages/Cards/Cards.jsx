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
import CarouselCards from "../../components/CarouselCards/CarouselCards";
import { useDispatch } from "react-redux";
import { fetchGetCardAccountArr } from "../../state-management/Dashboard/cards/cards.action";
import { selectCurrentUser } from "../../state-management/Dashboard/userData/userData.selector";
import { selectCardArr } from "../../state-management/Dashboard/cards/cards.selector";

function Cards() {
  const dispatch = useDispatch();
  const accountsArr = useSelector(selectCardArr);
  const [clicked, setClicked] = useState(true);
  const currentUser = useSelector(selectCurrentUser);
  const [selectedOption, setSelectedOption] = useState("New Account");
  const [selectedComponent, setSelectedComponent] = useState(<h1>Accounts</h1>);
  const currentAccount = useSelector(selectUserDetail);
  const { first_name, last_name } = currentAccount;

  useEffect(() => {
    dispatch(fetchGetCardAccountArr(currentUser));
  }, []);

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
        {/* <LeftWrapper> */}
        <CarouselCards cardsArr={accountsArr} />
        {/* </LeftWrapper> */}
        <RightWrapper>
          <FeatureContainer>
            <FeatureCard type="deposit" />
            <FeatureCard type="withdraw" />
          </FeatureContainer>
          <CardInfo />
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

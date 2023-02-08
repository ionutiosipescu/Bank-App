import React, { useState, useEffect } from "react";
// Style
import {
  BottomContainer,
  FeatureContainer,
  RightWrapper,
  TopContainer,
  ManageAccount,
} from "./Cards.style";

// Components
import FeatureCard from "../../features/cardsPage/FeatureCards/FeatureCard";
import CardInfo from "../../features/cardsPage/CardInfo/CardInfo";
import SmallDropdown from "./../../features/cardsPage/Dropdown/Dropdown";
import NewCard from "../../features/cardsPage/CardPages/NewCard/NewCard";
import EditCard from "../../features/cardsPage/CardPages/EditCard/EditCard";
import EditController from "../../features/cardsPage/CardPages/EditCard/EditController/EditController";
import CarouselCards from "../../components/CarouselCards/CarouselCards";
import Modal from "./../../components/Modal/Modal";

// State
import { fetchGetCardAccountArr } from "../../state-management/Dashboard/cards/cards.service";
import { selectCurrentUser } from "../../state-management/Dashboard/userData/userData.selector";
import { selectCardArr } from "../../state-management/Dashboard/cards/cards.selector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Cards() {
  const dispatch = useDispatch();
  const accountsArr = useSelector(selectCardArr);
  const currentUser = useSelector(selectCurrentUser);
  const [selectedOption, setSelectedOption] = useState("New Account");
  const [selectedComponent, setSelectedComponent] = useState(<h1>Accounts</h1>);

  useEffect(() => {
    dispatch(fetchGetCardAccountArr(currentUser));
  }, []);

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
        <CarouselCards cardsArr={accountsArr} />
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

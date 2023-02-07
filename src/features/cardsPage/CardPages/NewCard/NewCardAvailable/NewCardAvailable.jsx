import React, { useEffect } from "react";
import {
  AvailableAccountsContainer,
  NewCardAvailableContainer,
  ListContainer,
  CurrencyBox,
  ListItem,
  Title,
  PlanBox,
  BoxContainerHeader,
  EmptyText,
  ListItemDefault,
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
import { upperCaseFirst } from "../../../../../utils/helpers/helperFunctions/upperCaseFirstInitial";
import { selectCurrentCardNew } from "../../../../../state-management/Dashboard/cards/cards.selector";
import { options } from "../../../../../utils/data/plancardregisterData";
import { findObjectByString } from "../../../../../utils/helpers/helperFunctions/findObject";

function NewCardAvailable() {
  const currentAccountNew = useSelector(selectCurrentCardNew);
  const { currency, typeOfPlan } = currentAccountNew;
  const accountsArr = useSelector(selectCardArr);
  const data = accounts[0];
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = accounts.slice(currentIndex, currentIndex + 3);
  const [currentPlan, setCurrentPlan] = useState({});

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    console.log(typeOfPlan);
    setCurrentPlan(findObjectByString(typeOfPlan, options, "key"));
  }, [typeOfPlan]);

  return (
    <NewCardAvailableContainer>
      <Title>Available Accounts</Title>
      <CarouselCards
        size="sm"
        cardsArr={filterCards(accountsArr)}
        page={"NewPage"}
      />
      {filterCards(accountsArr).length === 0 ? (
        <></>
      ) : (
        <>
          <BoxContainerHeader>
            <CurrencyBox>{upperCaseFirst(currency)}</CurrencyBox>
            <PlanBox>{typeOfPlan}</PlanBox>
          </BoxContainerHeader>
          <AvailableAccountsContainer>
            <ListContainer>
              {typeOfPlan ? (
                <>
                  {currentPlan?.details?.map((detail, index) => {
                    return (
                      <React.Fragment key={index}>
                        <ListItem>
                          {`✔ ${detail.name}`}
                          <span>{detail.nr}</span>
                        </ListItem>
                      </React.Fragment>
                    );
                  })}
                </>
              ) : (
                <>
                  <ListItemDefault>
                    <span>✔3% Cashback</span>
                    <span>for any markets</span>
                  </ListItemDefault>
                  <ListItemDefault>
                    <span>✔Cash without commsion</span>
                    <span>WorldWide</span>
                  </ListItemDefault>
                  <ListItemDefault>
                    <span>✔New Card Design</span>
                    <span>From 2023</span>
                  </ListItemDefault>
                </>
              )}
            </ListContainer>
          </AvailableAccountsContainer>
        </>
      )}
    </NewCardAvailableContainer>
  );
}

export default NewCardAvailable;

import React from "react";
import {
  AvailableAccountsContainer,
  NewCardAvailableContainer,
  ListContainer,
  CurrencyBox,
  ListItem,
  Title,
  PlanBox,
  BoxContainerHeader,
} from "../../NewCard/NewCardAvailable/NewCardAvailable.style";
import { accounts } from "../../../../../utils/data/dummyData";
import { useState } from "react";
import CarouselCards from "../../../../../components/CarouselCards/CarouselCards";
import { selectCardArr } from "../../../../../state-management/Dashboard/cards/cards.selector";
import { useSelector } from "react-redux";
import { selectCurrentCardEdit } from "../../../../../state-management/Dashboard/cards/cards.selector";
import { upperCaseFirst } from "../../../../../utils/helpers/helperFunctions/upperCaseFirstInitial";
import { options } from "../../../../../utils/data/plancardregisterData";
import { useEffect } from "react";
import { findObjectByString } from "../../../../../utils/helpers/helperFunctions/findObject";

function EditCardAvailable() {
  const { currency, type_of_plan } = useSelector(selectCurrentCardEdit);
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
    setCurrentPlan(findObjectByString(type_of_plan, options, "key"));
  }, [type_of_plan]);

  return (
    <NewCardAvailableContainer>
      <Title>Available Accounts</Title>
      <CarouselCards size="sm" cardsArr={accountsArr} page={"editPage"} />
      <BoxContainerHeader>
        <CurrencyBox>{upperCaseFirst(currency)}</CurrencyBox>
        <PlanBox>{type_of_plan}</PlanBox>
      </BoxContainerHeader>
      {/* Advantajes Card */}
      <AvailableAccountsContainer>
        <ListContainer>
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
          {/* <ListItem>
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
          </ListItem> */}
        </ListContainer>
      </AvailableAccountsContainer>
    </NewCardAvailableContainer>
  );
}

export default EditCardAvailable;

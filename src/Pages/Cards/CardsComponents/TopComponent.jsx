import React from "react";
// Style
import { FeatureContainer, RightWrapper, TopContainer } from "../Cards.style";

// Components
import CarouselCards from "../../../components/CarouselCards/CarouselCards";
import CardInfo from "../../../features/cardsPage/CardInfo/CardInfo";
import FeatureCards from "../../../features/cardsPage/FeatureCards/FeatureCard";

// State/Redux
import { useSelector } from "react-redux";
import { selectCardArr } from "../../../state-management/Dashboard/cards/cards.selector";

function TopComponent() {
  const accountsArr = useSelector(selectCardArr);

  return (
    <TopContainer>
      <CarouselCards cardsArr={accountsArr} />
      <RightWrapper>
        <FeatureContainer>
          <FeatureCards type="deposit" />
          <FeatureCards type="withdraw" />
        </FeatureContainer>
        <CardInfo />
      </RightWrapper>
    </TopContainer>
  );
}

export default TopComponent;

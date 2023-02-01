import React from "react";
import OutcomeChart from "./../../../components/OutcomeCard/OutcomeCard";
import OverviewCard from "./../../../components/OverviewCard/OverviewCard";
import {
  ChartsWrapper,
  HeaderArt,
  HeaderContainer,
  PresentationPageWrapper,
  PresentationTopCard,
} from "./ServiceHomePresentation.style";
import { Icon } from "./../../../components/ProfileComponent/ProfileComponent.style";

function ServiceHomePresentation() {
  return (
    <PresentationPageWrapper>
      <PresentationTopCard>
        <HeaderContainer>
          <img
            src="https://cdn.dribbble.com/users/2243452/screenshots/6339193/qcash.gif"
            alt=""
          />
          <HeaderArt>
            <h2>
              Here you will find all of your services just one click away!
            </h2>
            <br />
            <h2>It's never been easier!</h2>
          </HeaderArt>
        </HeaderContainer>
      </PresentationTopCard>
      <ChartsWrapper>
        <OutcomeChart />
        <OverviewCard />
      </ChartsWrapper>
    </PresentationPageWrapper>
  );
}

export default ServiceHomePresentation;

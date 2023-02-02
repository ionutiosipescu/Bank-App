import React from "react";
import OutcomeChart from "./../../../components/OutcomeCard/OutcomeCard";
import OverviewCard from "./../../../components/OverviewCard/OverviewCard";
import {
  ChartsWrapper,
  HeaderArt,
  HeaderContainer,
  PresentationInfo,
  PresentationPageWrapper,
  PresentationTopCard,
} from "./ServiceHomePresentation.style";
import {
  CardContainer,
  CardCornerArt,
} from ".././../../components/UI/Card/Card.style";
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
        <CardContainer size="md">
          <CardCornerArt />
          <PresentationInfo>
            <span>
              <h2>Transfer money in seconds!</h2>
            </span>
            <img
              src="https://nairarecharge.com/asset/images/gifme.gif"
              alt=""
            />
          </PresentationInfo>
        </CardContainer>
        <CardContainer size="md">
          <PresentationInfo>
            <img
              src="https://nairarecharge.com/asset/images/gifme.gif"
              alt=""
            />
          </PresentationInfo>
        </CardContainer>
      </ChartsWrapper>
    </PresentationPageWrapper>
  );
}

export default ServiceHomePresentation;

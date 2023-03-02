import React from "react";
import {
  HeaderArt,
  HeaderContainer,
  PresentationPageWrapper,
  PresentationTopCard,
} from "./ServiceHomePresentation.style";
import ServiceHomeCards from "./ServiceHomeCards/ServiceHomeCards";

import image from "../assets/bank.gif";

function ServiceHomePresentation() {
  return (
    <PresentationPageWrapper>
      <PresentationTopCard>
        <HeaderContainer>
          <img src={image} alt="" />
          <HeaderArt>
            <h2>
              Here you will find all of your services just one click away!
            </h2>
            <br />
            <h2>It's never been easier!</h2>
          </HeaderArt>
        </HeaderContainer>
      </PresentationTopCard>
      <ServiceHomeCards />
    </PresentationPageWrapper>
  );
}

export default ServiceHomePresentation;

import React from "react";
import {
  HeaderArt,
  HeaderContainer,
  PresentationPageWrapper,
  PresentationTopCard,
} from "./ServiceHomePresentation.style";
import ServiceHomeCards from "./ServiceHomeCards/ServiceHomeCards";

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
      <ServiceHomeCards />
    </PresentationPageWrapper>
  );
}

export default ServiceHomePresentation;

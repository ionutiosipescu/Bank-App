import React, { useState } from "react";
import Button from "../UI/Button/Button";
import {
  InfoContainer,
  InfoSection,
  ProgressBar,
  ProgressBarInterior,
  ProgressCardContainer,
  ProgressCardIllustration,
} from "./ProgressCard.style";

import business from "../../features/loans/assets/business.gif";
import car from "../../features/loans//assets/car.gif";
import education from "../../features/loans//assets/education.gif";
import house from "../../features/loans//assets/house.gif";
import investement from "../../features/loans//assets/investment.gif";
import travel from "../../features/loans//assets/travel.gif";

const ProgressCard = ({ ...props }) => {
  const { title, handleClick, amount, paid } = props;
  const getImageSource = () => {
    switch (title) {
      case "car":
        return car;
      case "house":
        return house;
      case "travel":
        return travel;
      case "investition":
        return investement;
      case "business":
        return business;
      case "education":
        return education;
      default:
        return "";
    }
  };

  return (
    <ProgressCardContainer>
      <h2>{`${title}`[0].toUpperCase() + `${title}`.slice(1)}</h2>
      <InfoContainer>
        <InfoSection>
          <ProgressCardIllustration src={getImageSource()} alt="" />
        </InfoSection>
        <InfoSection>
          <h3>{paid < amount ? paid : amount} RON</h3>
          <h4>{amount} RON</h4>
        </InfoSection>
      </InfoContainer>
      <ProgressBar>
        <ProgressBarInterior paid={paid} amount={amount} />
      </ProgressBar>
      {paid < amount ? (
        <h3>
          Your are <span>{Math.round((paid / amount) * 100)}%</span> there!
        </h3>
      ) : (
        <h3>Your loan is fully paid. Thank you!</h3>
      )}
      <Button
        label="Pay Loan"
        primary="primary"
        size="xl"
        handleClick={handleClick}
        disabled={paid >= amount ? true : false}
      />
    </ProgressCardContainer>
  );
};

export default ProgressCard;

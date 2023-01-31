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
import { upperCaseFirst } from "../../utils/helpers/helperFunctions/upperCaseFirstInitial";

const ProgressCard = ({ ...props }) => {
  const { title, handleClick, amount, paid } = props;
  // const [target, setTarget] = useState(amount);
  // const [current, setCurrent] = useState(paid);

  return (
    <ProgressCardContainer>
      <h2>{title}</h2>
      <InfoContainer>
        <InfoSection>
          <ProgressCardIllustration
            src={
              title === "car"
                ? "http://37.media.tumblr.com/af9d864af646109bf03c6d454c0f396d/tumblr_n3o0gyK7k31rn9vmdo1_500.gif"
                : title === "house"
                ? "https://24.media.tumblr.com/8db5d020f5c25d95b6b190f2b27bb153/tumblr_mqg6jn7SkH1rn9vmdo1_500.gif"
                : "https://i.gifer.com/embedded/download/KEqy.gif"
            }
            alt=""
          />
        </InfoSection>
        <InfoSection>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>You payed:</h3>
            <h3>
              {paid} / {amount}
            </h3>
          </div>
          {/* <div style={{ display: "flex" }}>
            <h3>Left:</h3>
            <h3>{amount - paid}</h3>
          </div> */}
        </InfoSection>
      </InfoContainer>
      <ProgressBar>
        <ProgressBarInterior paid={paid} amount={amount} />
      </ProgressBar>
      <h3>You are almost there!</h3>
      <Button
        label="Pay"
        size="fullWidth"
        primary="primary"
        handleClick={handleClick}
      />
    </ProgressCardContainer>
  );
};

export default ProgressCard;

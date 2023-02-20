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

const ProgressCard = ({ ...props }) => {
  const { title, handleClick, amount, paid } = props;
  // const [target, setTarget] = useState(amount);
  // const [current, setCurrent] = useState(paid);

  return (
    <ProgressCardContainer>
      <h2>{`${title}`[0].toUpperCase() + `${title}`.slice(1)}</h2>
      <InfoContainer>
        <InfoSection>
          <ProgressCardIllustration
            src={
              title === "car"
                ? "http://37.media.tumblr.com/af9d864af646109bf03c6d454c0f396d/tumblr_n3o0gyK7k31rn9vmdo1_500.gif"
                : title === "house"
                ? "https://24.media.tumblr.com/8db5d020f5c25d95b6b190f2b27bb153/tumblr_mqg6jn7SkH1rn9vmdo1_500.gif"
                : title === "travel"
                ? "http://37.media.tumblr.com/57b027cea8f8cacfd572157b510c0ad8/tumblr_n5tqedhMIP1rn9vmdo1_500.gif"
                : title === "investition"
                ? "http://moneyisle.in/wp-content/uploads/2022/03/93344-money-investment.gif"
                : title === "business"
                ? "https://i.pinimg.com/originals/51/4c/4f/514c4f3a891ffc51439d20dc145f7563.gif"
                : title == "education"
                ? "https://cdn.dribbble.com/users/1233499/screenshots/3900568/education.gif"
                : ""
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
        label="Pay Loan"
        size="fullWidth"
        primary="primary"
        handleClick={handleClick}
      />
    </ProgressCardContainer>
  );
};

export default ProgressCard;

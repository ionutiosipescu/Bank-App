import React from "react";
import illustration from "../../../assets/images/login-hero.webp";
import { HeroCard, HeroArt } from "./HeroLogin.style";

const HeroLogIn = () => {
  return (
    <HeroCard>
      <HeroArt>
        <img src={illustration} alt="" />
      </HeroArt>
    </HeroCard>
  );
};

export default HeroLogIn;

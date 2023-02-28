import React from "react";
import { HeroCard, HeroArt } from "./HeroLogin.style";
import login from "../../../assets/images/login.png";
import password from "../../../assets/images/password.png";

const HeroLogIn = ({ ...props }) => {
  return (
    <HeroCard>
      <HeroArt>
        <img src={props.type === "login" ? login : password} alt="" />
      </HeroArt>
    </HeroCard>
  );
};

export default HeroLogIn;

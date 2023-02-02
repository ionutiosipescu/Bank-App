import React from "react";
import illustration from "../../../assets/images/login-hero.webp";
import { HeroCard, HeroArt } from "./HeroLogin.style";

const HeroLogIn = ({ ...props }) => {
  return (
    <HeroCard>
      <HeroArt>
        <img
          src={
            props.type === "login"
              ? "https://ecurater.com/wp-content/uploads/2020/10/login1.png"
              : "https://i.pinimg.com/originals/d2/f1/3d/d2f13d48f5ec46049f05bf6af098e7e9.png"
          }
          alt=""
        />
      </HeroArt>
    </HeroCard>
  );
};

export default HeroLogIn;

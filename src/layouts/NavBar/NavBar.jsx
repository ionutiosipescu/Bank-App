import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/UI/Button/Button";
import {
  NavBarContainer,
  NavBarSection,
  ProfileContainer,
} from "./NavBar.style";

import { RiSettingsLine, RiNotification4Line } from "react-icons/ri";

import avatar from "../../assets/images/avatar.png";

import { accounts } from "../../utils/data/dummyData";
import { Link } from "react-router-dom";

function NavBar() {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };
  return (
    <NavBarContainer>
      <SearchBar active={active} onClick={handleActive} />
      <NavBarSection active={active}>
        <Button to="/settings">
          <RiSettingsLine size={22} />
        </Button>
        <Button to="">
          <RiNotification4Line size={22} />
        </Button>
        <ProfileContainer as={Link} to="/profile">
          <img src={avatar} alt="" />
          <h2>{accounts[0].owner}</h2>
        </ProfileContainer>
      </NavBarSection>
    </NavBarContainer>
  );
}

export default NavBar;

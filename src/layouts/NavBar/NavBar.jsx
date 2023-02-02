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
import LinkButton from "../../components/UI/LinkButton/LinkButton";
import Toggle from "../../components/UI/Toggle/Toggle";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../state-management/Dashboard/userData/userData.selector";

function NavBar() {
  const userData = useSelector(selectCurrentUser);
  const { first_name, last_name } = userData.userDetail;

  const [active, setActive] = useState("notActive");

  const handleActive = () => {
    setActive(active === "active" ? "notActive" : "active");
  };
  return (
    <NavBarContainer>
      <SearchBar active={active} onClick={handleActive} />
      <NavBarSection active={active}>
        {/* <Toggle /> */}
        <LinkButton to="/settings" size="round">
          <RiSettingsLine size={22} />
        </LinkButton>
        <LinkButton to="" size="round">
          <RiNotification4Line size={22} />
        </LinkButton>
        <ProfileContainer as={Link} to="/profile">
          <img src={avatar} alt="" />
          <h2>{`${first_name} ${last_name}`}</h2>
        </ProfileContainer>
      </NavBarSection>
    </NavBarContainer>
  );
}

export default NavBar;

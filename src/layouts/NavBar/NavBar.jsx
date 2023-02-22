import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/UI/Button/Button";
import {
  NavBarContainer,
  NavBarSection,
  NotificationButton,
  NotificationDot,
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
import { selectIsSubmiting } from "../../state-management/Auth/loginUser/loginUser.selector";
import Spinner from "../../components/Spinner/Spinner";
import Notification from "../../features/notifications/Notification/Notification";

function NavBar() {
  const userData = useSelector(selectCurrentUser);
  // const { first_name = "", last_name = "" } = userData.userDetail;

  const isSubmiting = useSelector(selectIsSubmiting);

  const [active, setActive] = useState("notActive");
  const [notificationStatus, setNotificationStatus] = useState(false);
  const [newNotifications, setnewNotifications] = useState(true);

  const handleActive = () => {
    setActive(active === "active" ? "notActive" : "active");
  };

  const handleNotificationStatus = () => {
    setNotificationStatus(!notificationStatus);
    setnewNotifications(!newNotifications);
  };

  return (
    <NavBarContainer>
      <SearchBar active={active} onClick={handleActive} />
      <NavBarSection active={active}>
        {/* <Toggle /> */}
        <LinkButton to="/settings" size="round">
          <RiSettingsLine size={22} />
        </LinkButton>
        <NotificationButton size="round" onClick={handleNotificationStatus}>
          <RiNotification4Line size={22} />
          {newNotifications && <NotificationDot />}
        </NotificationButton>
        <ProfileContainer as={Link} to="/profile">
          {isSubmiting && userData ? (
            <Spinner />
          ) : (
            <>
              <img src={avatar} alt="" />
              <h2>{`${userData.userDetail.first_name} ${userData.userDetail.last_name}`}</h2>
            </>
          )}
        </ProfileContainer>
      </NavBarSection>
      <Notification status={notificationStatus} />
    </NavBarContainer>
  );
}

export default NavBar;

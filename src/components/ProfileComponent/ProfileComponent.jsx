import React from "react";
import {
  ProfileContainer,
  ProfileWrapper,
  ProfileInfo,
  Icon,
  InfoSection,
} from "./ProfileComponent.style";

import { RiMailLine, RiMapPinLine, RiPhoneLine } from "react-icons/ri";

import avatar from "../../assets/images/avatar-2.png";
import LinkButton from "../UI/LinkButton/LinkButton";

function ProfileComponent({ image, name, address, email, phoneNumber }) {
  return (
    <ProfileWrapper>
      <ProfileContainer>
        <img src={avatar} alt="" />
        <div>
          <h1>{name}</h1>
          <LinkButton label="Edit Profile" size="sm" to="/settings" />
        </div>
      </ProfileContainer>
      <ProfileInfo>
        <InfoSection>
          <Icon>
            <RiMapPinLine size={25} />
          </Icon>
          <div>
            <h4>Address</h4>
            <p>{address}</p>
          </div>
        </InfoSection>
        <InfoSection>
          <Icon>
            <RiMailLine size={25} />
          </Icon>
          <div>
            <h4>Email</h4>
            <p>{email} </p>
          </div>
        </InfoSection>
        <InfoSection>
          <Icon>
            <RiPhoneLine size={25} />
          </Icon>
          <div>
            <h4>Phone</h4>
            <p>{phoneNumber} </p>
          </div>
        </InfoSection>
      </ProfileInfo>
    </ProfileWrapper>
  );
}

export default ProfileComponent;

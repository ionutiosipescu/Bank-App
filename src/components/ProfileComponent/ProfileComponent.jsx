import React from "react";
import Button from "../UI/Button/Button";
import {
  ProfileContainer,
  ProfileWrapper,
  ProfileInfo,
  Icon,
  InfoSection,
} from "./ProfileComponent.style";

import { RiMailLine, RiMapPinLine, RiPhoneLine } from "react-icons/ri";

import avatar from "../../assets/images/avatar.png";
import LinkButton from "../UI/LinkButton/LinkButton";

function ProfileComponent({ image, name, address, email, phoneNumber }) {
  return (
    <ProfileWrapper>
      <ProfileContainer>
        <div>
          <img src={avatar} alt="" />
        </div>
        <div>
          <h2>{name}</h2>
          <LinkButton label="Edit Profile" size="md" to="/settings" />
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

import React from "react";
import Button from "../UI/Button/Button";
import {
  ProfileContainer,
  ProfileWrapper,
  ProfileInfo,
  Icon,
  InfoSection,
} from "./ProfileComponent.style";

import avatar from "../../assets/images/avatar.png";

function ProfileComponent({ image, name, address, email, phoneNumber }) {
  return (
    <ProfileWrapper>
      <ProfileContainer>
        <div>
          <img src={avatar} alt="" />
        </div>
        <div>
          <h2>{name}</h2>
          <Button label="Edit Profile" size="sm" to="/settings" />
        </div>
      </ProfileContainer>
      <ProfileInfo>
        <InfoSection>
          <Icon></Icon>
          <div>
            <h4>Address</h4>
            <p>{address}</p>
          </div>
        </InfoSection>
        <InfoSection>
          <Icon></Icon>
          <div>
            <h4>Email</h4>
            <p>{email} </p>
          </div>
        </InfoSection>
        <InfoSection>
          <Icon></Icon>
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

import React from "react";
import { Icon } from "../ProfileComponent/ProfileComponent.style";
import {
  UserCardBody,
  UserCardContainer,
  UserCardHeader,
  UserCardInfo,
} from "./UserCard.style";

import { RiMailLine, RiPhoneLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function UserCard({ image, name, email, phone, onClick, to }) {
  return (
    <UserCardContainer as={Link} to={to} onClick={onClick}>
      <UserCardHeader>
        <img src={image} alt="avatar" />
        <h3>{name} </h3>
      </UserCardHeader>
      <UserCardBody>
        <UserCardInfo>
          <Icon>
            <RiMailLine size={20} />
          </Icon>
          <div>
            <p>Email</p>
            <h5>{email}</h5>
          </div>
        </UserCardInfo>
        <UserCardInfo>
          <Icon>
            <RiPhoneLine size={20} />
          </Icon>
          <div>
            <p>Phone</p>
            <h5>{phone}</h5>
          </div>
        </UserCardInfo>
      </UserCardBody>
    </UserCardContainer>
  );
}

export default UserCard;

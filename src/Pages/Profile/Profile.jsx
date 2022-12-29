import React from "react";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import { TopContainer } from "../Cards/Cards.style";
import { PlanContainer } from "./Profile.style";

import { accounts } from "../../utils/data/dummyData";

function Profile() {
  return (
    <TopContainer>
      <ProfileComponent
        name={accounts[0].owner}
        address={accounts[0].address}
        email={accounts[0].email}
        phoneNumber={accounts[0].phoneNumber}
      ></ProfileComponent>
      <PlanContainer></PlanContainer>
    </TopContainer>
  );
}

export default Profile;

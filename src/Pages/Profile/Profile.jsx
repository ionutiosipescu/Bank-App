import React from "react";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import { TopContainer } from "../Cards/Cards.style";
import { PlanContainer, UsersContainer, UsersWrapper } from "./Profile.style";

import PlanCard from "../../components/PlanCard/PlanCard";
import UserCard from "../../components/UserCard/UserCard";
import { SettingsContainer } from "../Settings/Settings.style";

import { accounts } from "../../utils/data/dummyData";
import { selectCurrentUser } from "../../state-management/Dashboard/userData/userData.selector";
import { useSelector } from "react-redux";

function Profile() {
  const userData = useSelector(selectCurrentUser);
  const { first_name, last_name, address, mobile } = userData.userDetail;

  return (
    <>
      <TopContainer>
        <ProfileComponent
          name={`${first_name} ${last_name}`}
          address={address}
          email={accounts[0].email}
          phoneNumber={mobile}
        />
        <PlanContainer>
          <PlanCard />
        </PlanContainer>
      </TopContainer>
      <SettingsContainer>
        <UsersWrapper>
          <h2>Recent Users</h2>
          <UsersContainer>
            {accounts.map((account) => (
              <UserCard
                name={account.owner}
                email={account.email}
                phone={account.phoneNumber}
                image={account.image}
                to="/dashboard"
              />
            ))}
          </UsersContainer>
        </UsersWrapper>
      </SettingsContainer>
    </>
  );
}

export default Profile;

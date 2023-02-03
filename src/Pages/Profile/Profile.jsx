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
  const { email } = userData;
  const { first_name, last_name, address, mobile } = userData.userDetail;
  const { type_of_plan } = userData.account[0];

  return (
    <>
      <TopContainer>
        <ProfileComponent
          name={`${first_name} ${last_name}`}
          address={address}
          email={email}
          phoneNumber={mobile}
        />
        <PlanContainer>
          <PlanCard plan={type_of_plan} />
        </PlanContainer>
      </TopContainer>
      <SettingsContainer>
        <UsersWrapper>
          <h2>Recent Users</h2>
          <UsersContainer>
            {accounts.map((account, index) => (
              <UserCard
                key={index}
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

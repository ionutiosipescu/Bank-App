import React from "react";
// Style
import { PlanContainer, UsersContainer, UsersWrapper } from "./Profile.style";
import { TopContainer } from "../Cards/Cards.style";
import { SettingsContainer } from "../Settings/Settings.style";

// Components
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import PlanCard from "../../components/PlanCard/PlanCard";
import UserCard from "../../components/UserCard/UserCard";

// State/Redux
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../state-management/Dashboard/userData/userData.selector";

// !Dummy Data
import { accounts } from "../../utils/data/dummyData";

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
                to="/services/transfers/newtransfer"
              />
            ))}
          </UsersContainer>
        </UsersWrapper>
      </SettingsContainer>
    </>
  );
}

export default Profile;

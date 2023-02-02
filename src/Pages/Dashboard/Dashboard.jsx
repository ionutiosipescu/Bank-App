import React from "react";

import {
  BottomContainer,
  DashboardContainer,
  StyledTopCard,
  TopContainer,
} from "./Dashboard.style";

import BalanceCard from "../../components/BalanceCard/BalanceCard";
import { accounts } from "../../utils/data/dummyData";
import TopCard from "../../components/TopCard/TopCard";
import OverviewCard from "./../../components/OverviewCard/OverviewCard";
import OutcomeChart from "../../components/OutcomeCard/OutcomeCard";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectUserDetail,
} from "../../state-management/Dashboard/userData/userData.selector";
import { selectUserAccount } from "../../state-management/Dashboard/userData/userData.selector";
import Spinner from "../../components/Spinner/Spinner";
import { selectIsSubmiting } from "../../state-management/Auth/loginUser/loginUser.selector";
import { selectCurrentCardAccount } from "../../state-management/Dashboard/cards/cards.selector";
import { generateRandomNumber } from "../../utils/helpers/helperFunctions/randomNumber";
import { cardValidityGenerator } from "../../utils/helpers/helperFunctions/cardValidityGenerator";

function Dashboard() {
  const currentCardAccount = useSelector(selectCurrentCardAccount);
  // const currentAccount = useSelector(selectCurrentUser);
  // const { created_at, currency } = currentCardAccount;

  const isSubmiting = useSelector(selectIsSubmiting);
  const userData = useSelector(selectCurrentUser);
  const account = useSelector(selectUserAccount);

  // const {
  //   first_name = "",
  //   last_name = "",
  //   created_at = "",
  // } = userData.userDetail;

  // console.log(currentCardAccount, "currentAccount");
  // console.log(userData, "userData");
  // console.log(created_at);

  return (
    <React.Fragment>
      {isSubmiting ? (
        <Spinner />
      ) : (
        <>
          <DashboardContainer>
            <TopContainer>
              {currentCardAccount.length < 1 ? (
                <BalanceCard
                  size="sm"
                  balance={`${currentCardAccount.balance}`}
                  currency={currentCardAccount.currency}
                  name={`${userData.userDetail.first_name} ${userData.userDetail.last_name}`}
                  cardNum={`${generateRandomNumber(16)}`}
                  valid={cardValidityGenerator(currentCardAccount.created_at)}
                />
              ) : (
                <BalanceCard
                  size="sm"
                  balance={`${userData.account[0].balance}`}
                  currency={userData.account[0].currency}
                  name={`${userData.userDetail.first_name} ${userData.userDetail.last_name}`}
                  cardNum={`${generateRandomNumber(16)}`}
                  valid={cardValidityGenerator(userData.userDetail.created_at)}
                />
              )}

              <TopCard
                label="Income"
                amount="$5,542.23"
                percent="+0.5"
                size="sm"
                primary="primary"
              />
              <TopCard
                label="Outcome"
                amount="$1,215.37"
                percent="-0.2"
                size="sm"
              />
            </TopContainer>
            <BottomContainer>
              <OverviewCard />
              <OutcomeChart />
            </BottomContainer>
          </DashboardContainer>
        </>
      )}
    </React.Fragment>
  );
}

export default Dashboard;

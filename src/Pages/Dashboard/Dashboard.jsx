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
import { selectCurrentUser } from "../../state-management/Dashboard/userData/userData.selector";
import { selectUserAccount } from "../../state-management/Dashboard/userData/userData.selector";
import Spinner from "../../components/Spinner/Spinner";
import { selectIsSubmiting } from "../../state-management/Auth/loginUser/loginUser.selector";

function Dashboard() {
  const isSubmiting = useSelector(selectIsSubmiting);
  const userData = useSelector(selectCurrentUser);
  const account = useSelector(selectUserAccount);
  // console.log(account);
  return (
    <React.Fragment>
      {isSubmiting ? (
        <Spinner />
      ) : (
        <DashboardContainer>
          <TopContainer>
            <BalanceCard
              color="purple"
              size="sm"
              balance={accounts[0].balance}
              cardNum={accounts[0].cardNumber}
              name={accounts[0].owner}
              valid={accounts[0].validity}
            />
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
      )}
    </React.Fragment>
  );
}

export default Dashboard;

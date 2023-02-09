import React, { useState } from "react";

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
import { useDispatch, useSelector } from "react-redux";
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
import { fetchGetCardAccountArr } from "../../state-management/Dashboard/cards/cards.service";
import { useEffect } from "react";
import { setDashboardObjectCard } from "../../state-management/Dashboard/userData/userData.action";
import { selectCardArr } from "../../state-management/Dashboard/cards/cards.selector";

function Dashboard() {
  const accountsArr = useSelector(selectCardArr);
  const isSubmiting = useSelector(selectIsSubmiting);
  const userData = useSelector(selectCurrentUser);

  useEffect(() => {
    console.log(accountsArr.length === 0);
  }, [accountsArr]);

  return (
    <React.Fragment>
      {isSubmiting ? (
        <Spinner />
      ) : (
        <>
          <DashboardContainer>
            <TopContainer>
              <BalanceCard
                size="sm"
                balance={`${
                  accountsArr.length === 0
                    ? userData.account[0].balance
                    : accountsArr[0].balance
                }`}
                currency={userData.account[0].currency}
                name={`${userData.userDetail.first_name} ${userData.userDetail.last_name}`}
                cardNum={`${generateRandomNumber(16)}`}
                valid={cardValidityGenerator(userData.userDetail.created_at)}
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
        </>
      )}
    </React.Fragment>
  );
}

export default Dashboard;

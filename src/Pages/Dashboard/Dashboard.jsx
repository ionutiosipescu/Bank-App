import React, { useState } from "react";

import {
  BottomContainer,
  DashboardContainer,
  StyledTopCard,
  TopContainer,
} from "./Dashboard.style";

import BalanceCard from "../../components/BalanceCard/BalanceCard";
import TopCard from "../../components/TopCard/TopCard";
import OverviewCard from "./../../components/OverviewCard/OverviewCard";
import OutcomeChart from "../../components/OutcomeCard/OutcomeCard";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../state-management/Dashboard/userData/userData.selector";
import Spinner from "../../components/Spinner/Spinner";
import { selectIsSubmiting } from "../../state-management/Auth/login/login.selector";
import { generateRandomNumber } from "../../utils/helpers/helperFunctions/randomNumber";
import { cardValidityGenerator } from "../../utils/helpers/helperFunctions/cardValidityGenerator";
import { useEffect } from "react";
import { selectCardArr } from "../../state-management/Dashboard/cards/cards.selector";
import { selectOptionTransfer } from "../../state-management/Dashboard/services/transfer/transfer.selector";
import { getTransferArr } from "../../state-management/Dashboard/services/transfer/transfer.service";
import { selectNotificationOpen } from "../../state-management/Dashboard/dashboard/dashboard.selector";
import { getTransferArrNotifications } from "../../state-management/Dashboard/dashboard/dashboard.service";
import { selectDepositArr } from "../../state-management/Dashboard/services/deposit/deposit.selector";

function Dashboard() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const transferOption = useSelector(selectOptionTransfer);
  const accountsArr = useSelector(selectCardArr);
  const isSubmiting = useSelector(selectIsSubmiting);
  const userData = useSelector(selectCurrentUser);
  const notificationOpen = useSelector(selectNotificationOpen);
  const deposits = useSelector(selectDepositArr);

  useEffect(() => {
    if (isSubmiting === false) {
      dispatch(getTransferArrNotifications(userData, notificationOpen));
    }
    console.log(isSubmiting);
  }, [isSubmiting]);

  console.log(deposits);

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
                amount="5,542 RON"
                percent="+0.5"
                size="sm"
                primary="primary"
              />
              <TopCard
                label="Outcome"
                amount="1,215 RON"
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

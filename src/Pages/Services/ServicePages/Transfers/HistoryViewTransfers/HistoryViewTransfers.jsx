import React, { useEffect } from "react";
// Style
import { NewContainer } from "../../../../Cards/Cards.style";
import { CardHeader } from "../../../../../components/TopCard/TopCard.style";
import { ServiceViewCard } from "../../../../../components/UI/Card/Card.style";
import { DateContainer } from "../../../../../features/exchange/ExchangeList/ExchangeList.style";
import {
  AmountContainer,
  ListContainer,
  ListItem,
  IdList,
} from "../../../../../features/savings/SavingsListCard/SavingsListCard.style";
import {
  UserContainerTransfer,
  ListItemSectionTransfer,
  RecentUserContainer,
  NewTransferCard,
} from "./HistoryViewTransfers.style";

// Components
import LinkButton from "../../../../../components/UI/LinkButton/LinkButton";
import LabelList from "../../../../../components/UI/LabelList/LabelList";
import UserCard from "../../../../../components/UserCard/UserCard";

// State/Redux

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectTransferArr } from "../../../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.selector";
import { getTransferArr } from "../../../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.action";
import { selectCurrentUser } from "../../../../../state-management/Dashboard/userData/userData.selector";
import { selectTransferForm } from "../../../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.selector";

// !Dummy Data &  Test Component
import TransferDetails from "../../../../../components/Test/Test";
import { accounts } from "../../../../../utils/data/dummyData";
import Fallback from "../../../../../components/Fallback/Fallback";

function HisotryViewTransfers({ dataServices }) {
  const dispatch = useDispatch();
  const transferForm = useSelector(selectTransferForm);
  const currentUser = useSelector(selectCurrentUser);
  const transferArr = useSelector(selectTransferArr);

  useEffect(() => {
    dispatch(getTransferArr(transferForm, currentUser));
  }, []);
  return (
    <>
      <NewContainer>
        <RecentUserContainer>
          {accounts.slice(0, 3).map((account, index) => (
            <UserCard
              key={index}
              name={account.owner}
              email={account.email}
              phone={account.phoneNumber}
              image={account.image}
              to="/dashboard"
            />
          ))}
          <NewTransferCard>
            {/* <img
              src="https://paysend.com/images/how-long-does-it-take-to-transfer-money-1200.png"
              alt=""
            /> */}
            <LinkButton to={dataServices.path} primary="primary" size="md">
              New Transfer
            </LinkButton>
          </NewTransferCard>
        </RecentUserContainer>
      </NewContainer>
      <ServiceViewCard>
        <CardHeader style={{ height: "10%" }}>
          <h2>Transfers</h2>
        </CardHeader>
        <ListContainer>
          {transferArr.length > 0 ? (
            <>
              {transferArr?.map((transfer, index) => (
                <ListItem key={index}>
                  <ListItemSectionTransfer>
                    <UserContainerTransfer>
                      <img src={accounts[0].image} alt="poza" />
                    </UserContainerTransfer>
                    <h3>{transfer.details}</h3>
                    <IdList> #{transfer.id}</IdList>
                    <AmountContainer>${transfer.transfer}</AmountContainer>
                    <DateContainer>{transfer.date}</DateContainer>
                    <LabelList status={transfer.status || "Completed"}>
                      {transfer.status || "Completed"}
                    </LabelList>
                  </ListItemSectionTransfer>
                </ListItem>
              ))}
            </>
          ) : (
            <Fallback
              text={`No Transfer to display. Start by making your first transfer to track your finances. Click the "New Transfer" button to record it.`}
            />
          )}

          {/* <TransferDetails /> */}
        </ListContainer>
      </ServiceViewCard>
    </>
  );
}

export default HisotryViewTransfers;

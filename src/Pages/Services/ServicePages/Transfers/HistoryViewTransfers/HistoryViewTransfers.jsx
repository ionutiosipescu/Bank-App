import React from "react";
import { BsCashStack } from "react-icons/bs";
import { CardHeader } from "../../../../../components/TopCard/TopCard.style";
import Button from "../../../../../components/UI/Button/Button";
import { ServiceViewCard } from "../../../../../components/UI/Card/Card.style";
import { ListItemSection } from "../../../../../features/exchange/ExchangeList/ExchangeList.style";
import {
  AmountContainer,
  IdContainer,
  LabelContainer,
  ListContainer,
  ListIcon,
  ListItem,
  IdList,
} from "../../../../../features/savings/SavingsListCard/SavingsListCard.style";
import { NewContainer } from "../../../../Cards/Cards.style";

import { accounts } from "../../../../../utils/data/dummyData";
import LinkButton from "../../../../../components/UI/LinkButton/LinkButton";
import { useSelector } from "react-redux";
import { selectTransferArr } from "../../../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.selector";
import { DateContainer } from "../../../../../features/exchange/ExchangeList/ExchangeList.style";
import LabelList from "../../../../../components/UI/LabelList/LabelList";
import {
  UserContainerTransfer,
  ListItemSectionTransfer,
  RecentUserContainer,
  NewTransferCard,
} from "./HistoryViewTransfers.style";
import { useEffect } from "react";
import { getTransferArr } from "../../../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.action";
import { useDispatch } from "react-redux";
import { selectCurrentUser } from "../../../../../state-management/Dashboard/userData/userData.selector";
import { selectTransferForm } from "../../../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.selector";
import UserCard from "../../../../../components/UserCard/UserCard";
import { NewLoanCardContainer } from "../../../../../features/loans/NewLoanCard/NewLoanCard.style";
import TransferDetails from "../../../../../components/Test/Test";

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
            <img
              src="https://paysend.com/images/how-long-does-it-take-to-transfer-money-1200.png"
              alt=""
            />
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
          {/* {transferArr?.map((transfer, index) => (
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
          ))} */}
          <TransferDetails />
        </ListContainer>
      </ServiceViewCard>
    </>
  );
}

export default HisotryViewTransfers;

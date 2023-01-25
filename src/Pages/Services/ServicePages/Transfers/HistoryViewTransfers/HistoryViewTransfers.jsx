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
} from "./HistoryViewTransfers.style";

function HisotryViewTransfers({ dataServices }) {
  const transferArr = useSelector(selectTransferArr);
  return (
    <>
      <NewContainer>
        <LinkButton to={dataServices.path}>new Transfer</LinkButton>
      </NewContainer>
      <ServiceViewCard>
        <CardHeader style={{ height: "10%" }}>
          <h2>Transfers</h2>
        </CardHeader>
        <ListContainer>
          {transferArr.map((transfer, index) => (
            <ListItem key={index}>
              <ListItemSectionTransfer>
                <UserContainerTransfer>
                  <img src={transfer.image} alt="poza" />
                </UserContainerTransfer>
                <h3>{transfer.reciever}</h3>
                <IdList> #{transfer.id}</IdList>
                <AmountContainer>${transfer.amount}</AmountContainer>
                <DateContainer>{transfer.date}</DateContainer>
                <LabelList status={transfer.status}>
                  {transfer.status}
                </LabelList>
              </ListItemSectionTransfer>
            </ListItem>
          ))}
        </ListContainer>
      </ServiceViewCard>
    </>
  );
}

export default HisotryViewTransfers;

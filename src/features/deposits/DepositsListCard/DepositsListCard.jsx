import React from "react";
import {
  CardHeader,
  ServiceCard,
} from "../../../components/UI/Card/Card.style";
import {
  AmountContainer,
  LabelContainer,
  ListContainer,
  ListItem,
  LabelListCompleted,
  LabelListCanceled,
  LabelListPending,
  IdList,
} from "../../savings/SavingsListCard/SavingsListCard.style";
import {
  DateContainer,
  ListItemSection,
  RateContainer,
} from "../../exchange/ExchangeList/ExchangeList.style";
import LabelList from "../../../components/UI/LabelList/LabelList";
import LabelAction from "../../../components/UI/LabelAction/LabelAction";

import Button from "../../../components/UI/Button/Button";

import { deposits } from "../../../utils/data/dummyData";

function DepositsListCard() {
  return (
    <ServiceCard>
      <CardHeader style={{ height: "10%" }}>
        <h2>List Actions</h2>
      </CardHeader>
      <ListContainer>
        {deposits.map((transfer, index) => (
          <ListItem key={index}>
            <ListItemSection>
              <LabelAction action={transfer.status}>
                {transfer.status}
              </LabelAction>
              <IdList> #{transfer.id}</IdList>
              <AmountContainer>{transfer.amount}</AmountContainer>
              <DateContainer>{transfer.date}</DateContainer>
              <LabelList status={transfer.status_request}>
                {transfer.status_request}
              </LabelList>
            </ListItemSection>
            <Button label="Repeat" size="sm" primary={true} />
          </ListItem>
        ))}
      </ListContainer>
    </ServiceCard>
  );
}

export default DepositsListCard;

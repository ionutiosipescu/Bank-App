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

import Button from "../../../components/UI/Button/Button";

import { deposits } from "../../../utils/data/dummyData";

function DepositsListCard() {
  console.log(deposits);
  return (
    <ServiceCard>
      <CardHeader style={{ height: "10%" }}>
        <h2>Deposits</h2>
      </CardHeader>
      <ListContainer>
        {deposits.map((transfer, index) => (
          <ListItem key={index}>
            <ListItemSection>
              <LabelContainer>{transfer.status}</LabelContainer>
              <IdList> #{transfer.id}</IdList>
              <AmountContainer>{transfer.amount}</AmountContainer>
              <DateContainer>{transfer.date}</DateContainer>
              {transfer.status_request === "Completed" ? (
                <LabelListCompleted>
                  {transfer.status_request}
                </LabelListCompleted>
              ) : (
                <LabelListCanceled>{transfer.status_request}</LabelListCanceled>
              )}
            </ListItemSection>
            <Button label="Repeat" size="sm" primary={true} />
          </ListItem>
        ))}
      </ListContainer>
    </ServiceCard>
  );
}

export default DepositsListCard;

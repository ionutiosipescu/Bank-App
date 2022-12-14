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
} from "../../savings/SavingsListCard/SavingsListCard.style";
import { DateContainer, RateContainer } from "./ExchangeList.style";

import Button from "../../../components/UI/Button/Button";

import { accounts } from "../../../utils/data/dummyData";

const currentAccount = accounts[0].transfers;

function ExchangeList() {
  return (
    <ServiceCard>
      <CardHeader style={{ height: "10%" }}>
        <h2>Exchanges</h2>
      </CardHeader>
      <ListContainer>
        {currentAccount.map((transfer, index) => (
          <ListItem key={index}>
            <LabelContainer>
              {transfer.from} to {transfer.to}
            </LabelContainer>
            <RateContainer>Rate: {transfer.rate}</RateContainer>
            <AmountContainer>Transfered: {transfer.amount}</AmountContainer>
            <DateContainer>{transfer.date}</DateContainer>
            <Button label="Repeat" size="sm" primary={true} />
          </ListItem>
        ))}
      </ListContainer>
    </ServiceCard>
  );
}

export default ExchangeList;

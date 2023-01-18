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
import {
  DateContainer,
  ListItemSection,
  RateContainer,
} from "./ExchangeList.style";

import Button from "../../../components/UI/Button/Button";

import { accounts } from "../../../utils/data/dummyData";

const currentAccount = accounts[0].transfers;

function ExchangeList() {
  return (
    <ServiceCard>
      <CardHeader>
        <h2>Exchanges</h2>
      </CardHeader>
      <ListContainer>
        {currentAccount.map((transfer, index) => (
          <ListItem key={index}>
            <ListItemSection>
              <LabelContainer>
                {transfer.from} &#8594; {transfer.to}
              </LabelContainer>
              <RateContainer>Rate: {transfer.rate}</RateContainer>
              <AmountContainer>Sum: {transfer.amount}</AmountContainer>
              <DateContainer>{transfer.date}</DateContainer>
            </ListItemSection>
            <Button label="Repeat" size="md" primary={true} />
          </ListItem>
        ))}
      </ListContainer>
    </ServiceCard>
  );
}

export default ExchangeList;

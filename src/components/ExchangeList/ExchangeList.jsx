import React from "react";
import {
  CardHeader,
  ServiceCard,
} from "../../../components/UI/Card/Card.style";
import {
  ListContainer,
  ListItem,
} from "../../../components/SavingsListCard/SavingsListCard.style";

import { accounts } from "../../../utils/data/dummyData";

import Button from "../../../components/UI/Button/Button";
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
            <h3>
              {transfer.from} to {transfer.to}
            </h3>
            <h3>Rate: {transfer.rate}</h3>
            <h3>Transfered: {transfer.amount}</h3>
            <h3>{transfer.date}</h3>
            <Button label="Repeat" size="sm" primary="primary" />
          </ListItem>
        ))}
      </ListContainer>
    </ServiceCard>
  );
}

export default ExchangeList;

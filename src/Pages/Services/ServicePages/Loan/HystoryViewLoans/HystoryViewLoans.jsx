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
} from "../../../../../features/savings/SavingsListCard/SavingsListCard.style";
import { NewContainer } from "../../../../Cards/Cards.style";

import { accounts } from "../../../../../utils/data/dummyData";
import LinkButton from "../../../../../components/UI/LinkButton/LinkButton";

const data = accounts[0].savings;

function HisotryViewLoans({ dataServices }) {
  console.log(dataServices);
  return (
    <>
      <NewContainer>
        <LinkButton to={dataServices.path}>new Transfer</LinkButton>
      </NewContainer>
      <ServiceViewCard>
        <CardHeader style={{ height: "10%" }}>
          <h2>Savings</h2>
        </CardHeader>
        <ListContainer>
          {data.map((saving, id) => (
            <ListItem key={id}>
              <ListItemSection>
                <ListIcon>
                  <BsCashStack />
                </ListIcon>
                <LabelContainer>{saving.label}</LabelContainer>
                <AmountContainer>Sum: {saving.amount}</AmountContainer>
                <IdContainer>ID {saving.id}</IdContainer>
              </ListItemSection>
              <Button label="Top-Up" size="sm" primary={true} />
              <Button label="Withdraw" size="sm" />
            </ListItem>
          ))}
        </ListContainer>
      </ServiceViewCard>
    </>
  );
}

export default HisotryViewLoans;

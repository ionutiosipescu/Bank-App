import React from "react";
import { Icon } from "../../../components/ProfileComponent/ProfileComponent.style";
import { CardHeader } from "../../../components/TopCard/TopCard.style";
import Button from "../../../components/UI/Button/Button";
import { ServiceCard } from "../../../components/UI/Card/Card.style";
import {
  ListContainer,
  ListItem,
  LabelContainer,
  AmountContainer,
  IdContainer,
  ListIcon,
} from "./SavingsListCard.style";

import { BsCashStack } from "react-icons/bs";

import { accounts } from "../../../utils/data/dummyData";
import { ListItemSection } from "../../exchange/ExchangeList/ExchangeList.style";
import { useSelector } from "react-redux";
import { selectSavingArr } from "../../../state-management/Dashboard/services/helpers/savingsHelper/savingsHelper.selector";
const data = accounts[0].savings;

function SavingsListCard() {
  const savingData = useSelector(selectSavingArr);
  return (
    <ServiceCard>
      <CardHeader style={{ height: "10%" }}>
        <h2>Savings</h2>
      </CardHeader>
      <ListContainer>
        {savingData.map((saving, id) => (
          <ListItem key={id}>
            <ListItemSection>
              <ListIcon>
                <BsCashStack />
              </ListIcon>
              <LabelContainer>{saving.details}</LabelContainer>
              <AmountContainer>Sum: {saving.transfer}</AmountContainer>
              <IdContainer>ID {saving.id}</IdContainer>
            </ListItemSection>
            <Button label="Top-Up" size="sm" primary={true} />
            <Button label="Withdraw" size="sm" />
          </ListItem>
        ))}
      </ListContainer>
    </ServiceCard>
  );
}

export default SavingsListCard;

import React from "react";
import { Icon } from "../ProfileComponent/ProfileComponent.style";
import { CardHeader } from "../TopCard/TopCard.style";
import Button from "../UI/Button/Button";
import { ServiceCard } from "./../UI/Card/Card.style";
import { ListContainer, ListItem } from "./SavingsListCard.style";

import { accounts } from "../../utils/data/dummyData";

const data = accounts[0].savings;

function SavingsListCard() {
  return (
    <ServiceCard>
      <CardHeader style={{ height: "10%" }}>
        <h2>Savings</h2>
      </CardHeader>
      <ListContainer>
        {data.map((saving, id) => (
          <ListItem key={id}>
            <div>
              <Icon></Icon>
              <h3>{saving.label}</h3>
            </div>
            <div>
              <h3>{saving.amount}</h3>
              <h3>ID {saving.id}</h3>
            </div>
            <div>
              <Button label="Top-Up" size="sm" primary={true} />
              <Button label="Withdraw" size="sm" />
            </div>
          </ListItem>
        ))}
      </ListContainer>
    </ServiceCard>
  );
}

export default SavingsListCard;

import React, { useEffect } from "react";
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
import Fallback from "../../../components/Fallback/Fallback";
const data = accounts[0].savings;

function SavingsListCard() {
  const savingData = useSelector(selectSavingArr);

  useEffect(() => {
    console.log(savingData);
  }, [savingData]);
  return (
    <ServiceCard>
      <CardHeader style={{ height: "10%" }}>
        <h2>Savings</h2>
      </CardHeader>
      <ListContainer>
        {savingData.length > 0 ? (
          <>
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
                {/* <Button label="Top-Up" size="sm" primary="primary" /> */}
                <Button label="Withdraw" size="sm" primary="primary" />
              </ListItem>
            ))}
          </>
        ) : (
          <Fallback
            text={`No Saving to display. Start by making your first saving to track your finances. Click the "New Saving" button to record it.`}
          />
        )}
      </ListContainer>
    </ServiceCard>
  );
}

export default SavingsListCard;

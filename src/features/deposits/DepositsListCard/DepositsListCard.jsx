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

// import { deposits } from "../../../utils/data/dummyData";
import { useSelector } from "react-redux";
import { selectDepositArr } from "../../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";

function DepositsListCard() {
  const depositHistory = useSelector(selectDepositArr);
  return (
    <ServiceCard>
      <CardHeader>
        <h2>List Actions</h2>
      </CardHeader>
      <ListContainer>
        {depositHistory.map((transfer, index) => (
          <ListItem key={index}>
            <ListItemSection>
              <LabelAction action={transfer.action}>
                {transfer.action}
              </LabelAction>
              <IdList> #{transfer.id}</IdList>
              <AmountContainer>Amount: {transfer.amount}</AmountContainer>
              <DateContainer>{transfer.created_at}</DateContainer>
              <LabelList status={transfer.status}>{transfer.status}</LabelList>
            </ListItemSection>
            <Button label="Repeat" size="sm" primary="primary" />
          </ListItem>
        ))}
      </ListContainer>
    </ServiceCard>
  );
}

export default DepositsListCard;

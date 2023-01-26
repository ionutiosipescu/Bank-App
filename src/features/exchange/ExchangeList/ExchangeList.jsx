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
import { useSelector } from "react-redux";
import { selectExchangeArr } from "../../../state-management/Dashboard/services/helpers/exchangeHelper/exchangeHelper.selector";

function ExchangeList() {
  // transfer.amountToObj = amount converted
  const exchangeArr = useSelector(selectExchangeArr);

  const setExchangeArr = (currency) => {
    const string =
      currency === "RonToEuro" ? `RON \u{2194} EURO` : `EURO \u{2194} RON`;
    return string;
  };
  return (
    <ServiceCard>
      <CardHeader>
        <h2>Exchanges</h2>
      </CardHeader>
      <ListContainer>
        {exchangeArr.map((transfer, index) => (
          <ListItem key={index}>
            <ListItemSection>
              <LabelContainer>
                {setExchangeArr(transfer.type_exchange)}
              </LabelContainer>
              <RateContainer>Rate: 5.23</RateContainer>
              <AmountContainer>Sum: {transfer.exchange}</AmountContainer>
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

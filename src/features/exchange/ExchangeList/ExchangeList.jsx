import React from "react";
import {
  CardHeader,
  ServiceCard,
  ServiceInputsCard,
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
import { useDispatch, useSelector } from "react-redux";
import { selectExchangeArr } from "../../../state-management/Dashboard/services/helpers/exchangeHelper/exchangeHelper.selector";
import { fetchExchangeRepeat } from "../../../state-management/Dashboard/services/helpers/exchangeHelper/exchangeHelper.action";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";

function ExchangeList() {
  const dispatch = useDispatch();
  const exchangeArr = useSelector(selectExchangeArr);
  const currentUser = useSelector(selectCurrentUser);
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
            <Button
              label="Repeat"
              size="sm"
              primary="primary"
              onClick={() =>
                dispatch(
                  fetchExchangeRepeat(transfer, exchangeArr, currentUser)
                )
              }
            />
          </ListItem>
        ))}
      </ListContainer>
    </ServiceCard>
  );
}

export default ExchangeList;

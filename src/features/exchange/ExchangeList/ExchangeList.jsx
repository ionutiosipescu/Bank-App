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
import { SelectAccountToggle } from "../../deposits/DepositsControlerCard/DepositControlerCard.style";
import SmallDropdown from "../../cardsPage/Dropdown/Dropdown";
import { DepositHeaderList } from "../../deposits/DepositsListCard/DepositsListCard.style";
import { selectExchangeOption } from "../../../state-management/Dashboard/services/helpers/exchangeHelper/exchangeHelper.selector";
import { setSelectedOptionExchange } from "../../../state-management/Dashboard/services/helpers/exchangeHelper/exchangeHelper.action";

function ExchangeList() {
  const dispatch = useDispatch();
  const selectedOptionExchange = useSelector(selectExchangeOption);
  const exchangeArr = useSelector(selectExchangeArr);
  const currentUser = useSelector(selectCurrentUser);
  const setExchangeArr = (currency) => {
    const string =
      currency === "RonToEuro" ? `RON \u{2194} EURO` : `EURO \u{2194} RON`;
    return string;
  };

  const options = [
    { value: "ron", label: `RON \u{2194} EURO` },
    { value: "euro", label: `EURO \u{2194} RON` },
  ];

  return (
    <ServiceCard>
      <DepositHeaderList>
        <h2>Exchanges</h2>
        <SelectAccountToggle>
          <span>Filter: </span>
          <SmallDropdown
            options={options}
            selectedOption={selectedOptionExchange?.account}
            handleChange={(e) =>
              dispatch(setSelectedOptionExchange(e, selectedOptionExchange))
            }
          />
        </SelectAccountToggle>
      </DepositHeaderList>
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

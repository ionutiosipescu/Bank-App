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
import { useDispatch, useSelector } from "react-redux";
import { selectDepositArr } from "../../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";
import { upperCaseFirst } from "../../../utils/helpers/helperFunctions/upperCaseFirstInitial";
import { SelectAccountToggle } from "../DepositsControlerCard/DepositControlerCard.style";
import RadioButton from "../../../components/RadioButton/RadioButton";
import { DepositHeaderList } from "./DepositsListCard.style";
import { setFilterDepositList } from "../../../state-management/Dashboard/services/helpers/depositsHelper/depositsHelper.action";
import { selectDepositFilter } from "../../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";
import { fetchRepeatDeposit } from "../../../state-management/Dashboard/services/helpers/depositsHelper/deposit.service";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import SmallDropdown from "../../cardsPage/Dropdown/Dropdown";
import { options } from "./../../../utils/data/plancardregisterData";
import { useState } from "react";
import { useEffect } from "react";
import { setSelectedOptionDeposit } from "../../../state-management/Dashboard/services/helpers/depositsHelper/depositsHelper.action";
import { selectDepositOption } from "../../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";

function DepositsListCard() {
  const dispatch = useDispatch();
  const selectedOptionDeposit = useSelector(selectDepositOption);
  const depositHistory = useSelector(selectDepositArr);
  const currentUser = useSelector(selectCurrentUser);

  const options = [
    { value: "ron", label: "ron" },
    { value: "euro", label: "euro" },
  ];

  return (
    <ServiceCard>
      <DepositHeaderList>
        <h2>List Actions</h2>
        <SelectAccountToggle>
          <span>Filter: </span>
          <SmallDropdown
            options={options}
            selectedOption={selectedOptionDeposit.account}
            handleChange={(e) =>
              dispatch(setSelectedOptionDeposit(e, selectedOptionDeposit))
            }
          />
        </SelectAccountToggle>
      </DepositHeaderList>
      <ListContainer>
        {depositHistory?.map((transfer, index) => (
          <ListItem key={index}>
            <ListItemSection>
              <LabelAction action={upperCaseFirst(transfer?.status)}>
                {upperCaseFirst(transfer?.status)}
              </LabelAction>
              <IdList> #{transfer.id}</IdList>
              <AmountContainer>Amount: {transfer.balance}</AmountContainer>
              <DateContainer>{transfer.date}</DateContainer>
              <LabelList status={transfer?.id ? "Completed" : "Canceled"}>
                Completed
              </LabelList>
            </ListItemSection>
            <Button
              label="Repeat"
              size="sm"
              primary="primary"
              onClick={() =>
                dispatch(
                  fetchRepeatDeposit(
                    transfer,
                    selectedOptionDeposit,
                    depositHistory,
                    currentUser
                  )
                )
              }
            />
          </ListItem>
        ))}
      </ListContainer>
    </ServiceCard>
  );
}

export default DepositsListCard;

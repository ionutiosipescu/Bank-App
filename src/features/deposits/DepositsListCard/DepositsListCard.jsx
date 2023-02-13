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

function DepositsListCard() {
  const dispatch = useDispatch();
  const depositHistory = useSelector(selectDepositArr);
  const filterObj = useSelector(selectDepositFilter);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <ServiceCard>
      <DepositHeaderList>
        <h2>List Actions</h2>
        <SelectAccountToggle>
          <span>Filter: </span>
          <RadioButton
            firstText="euro"
            secondText="ron"
            name="account"
            setDataToggle={(e) => dispatch(setFilterDepositList(e, filterObj))}
          />
        </SelectAccountToggle>
      </DepositHeaderList>
      <ListContainer>
        {depositHistory.map((transfer, index) => (
          <ListItem key={index}>
            {console.log(transfer?.status)}
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
                    filterObj,
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

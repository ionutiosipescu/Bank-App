import React from "react";
// Style
import { ServiceCard } from "../../../components/UI/Card/Card.style";
import { SelectAccountToggle } from "../DepositsControlerCard/DepositControlerCard.style";
import { DepositHeaderList } from "./DepositsListCard.style";
import {
  DateContainer,
  ListItemSection,
} from "../../exchange/ExchangeList/ExchangeList.style";
import {
  AmountContainer,
  ListContainer,
  ListItem,
  IdList,
} from "../../savings/SavingsListCard/SavingsListCard.style";

// Components
import Button from "../../../components/UI/Button/Button";
import SmallDropdown from "../../cardsPage/Dropdown/Dropdown";
import LabelAction from "../../../components/UI/LabelAction/LabelAction";
import LabelList from "../../../components/UI/LabelList/LabelList";

// State/Redux
import { useDispatch, useSelector } from "react-redux";
import { selectDepositArr } from "../../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";
import { upperCaseFirst } from "../../../utils/helpers/helperFunctions/upperCaseFirstInitial";
import { selectDepositFilter } from "../../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";
import { fetchRepeatDeposit } from "../../../state-management/Dashboard/services/helpers/depositsHelper/deposit.service";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import { setSelectedOptionDepositData } from "../../../state-management/Dashboard/services/helpers/depositsHelper/depositsHelper.action";
import { selectDepositOption } from "../../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";

function DepositsListCard() {
  const dispatch = useDispatch();
  const selectedOptionDeposit = useSelector(selectDepositOption);
  const depositHistory = useSelector(selectDepositArr);
  const filterObj = useSelector(selectDepositFilter);
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
            selectedOption={selectedOptionDeposit}
            handleChange={(e) =>
              dispatch(setSelectedOptionDepositData(e, filterObj))
            }
          />
        </SelectAccountToggle>
      </DepositHeaderList>
      <ListContainer>
        {depositHistory.map((transfer, index) => (
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

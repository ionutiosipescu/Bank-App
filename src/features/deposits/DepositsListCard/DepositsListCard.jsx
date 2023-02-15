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
import { options } from "./../../../utils/data/plancardregisterData";
import { useState } from "react";
import { useEffect } from "react";
import { setSelectedOptionDeposit } from "../../../state-management/Dashboard/services/helpers/depositsHelper/depositsHelper.action";
import { selectDepositOption } from "../../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";
import Modal from "../../../components/Modal/Modal";
import ConfirmActionModal from "../../../components/ConfirmActionModal/ConfirmActionModal";

function DepositsListCard() {
  const dispatch = useDispatch();
  const selectedOptionDeposit = useSelector(selectDepositOption);
  const depositHistory = useSelector(selectDepositArr);
  const currentUser = useSelector(selectCurrentUser);

  const options = [
    { value: "ron", label: "ron" },
    { value: "euro", label: "euro" },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  const handleRepeat = () => {
    dispatch(
      fetchRepeatDeposit(
        modalData,
        selectedOptionDeposit,
        depositHistory,
        currentUser
      )
    );
    setModalOpen(false);
  };

  const handleModalOpen = (id) => {
    setModalOpen(true);
    setModalData(depositHistory.find((transfer) => transfer.id === id));
  };

  console.log(modalData);
  const handleModalClose = () => {
    setModalOpen(false);
  };

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
              onClick={() => handleModalOpen(transfer.id)}
            />
          </ListItem>
        ))}
      </ListContainer>
      <Modal opened={modalOpen} handleClick={handleModalClose}>
        <ConfirmActionModal
          action="repeat"
          type={modalData.status}
          amount={modalData.balance}
          data={modalData}
          handleClick={handleRepeat}
          handleModalClose={handleModalClose}
        />
      </Modal>
    </ServiceCard>
  );
}

export default DepositsListCard;

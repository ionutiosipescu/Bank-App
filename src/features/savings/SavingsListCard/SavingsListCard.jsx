import React from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { selectSavingArr } from "../../../state-management/Dashboard/services/helpers/savingsHelper/savingsHelper.selector";
import Modal from "../../../components/Modal/Modal";
import { useState } from "react";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import { fetchSavingData } from "../../../state-management/Dashboard/services/helpers/savingsHelper/savingsHelper.action";
import ConfirmActionModal from "../../../components/ConfirmActionModal/ConfirmActionModal";
const data = accounts[0].savings;

function SavingsListCard() {
  const savingData = useSelector(selectSavingArr);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  const handleRepeat = () => {
    setModalOpen(false);
  };

  const handleModalOpen = (id) => {
    setModalOpen(true);
    setModalData(savingData.find((saving) => saving.id === id));
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  console.log(modalData);
  return (
    <ServiceCard>
      <CardHeader style={{ height: "10%" }}>
        <h2>Savings</h2>
      </CardHeader>
      <ListContainer>
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
            <Button
              label="Repeat"
              size="sm"
              primary="primary"
              onClick={() => handleModalOpen(saving.id)}
            />
          </ListItem>
        ))}
      </ListContainer>
      <Modal opened={modalOpen} handleClick={handleModalClose}>
        <ConfirmActionModal
          action="repeat"
          type="saving"
          amount={modalData.transfer}
          data={modalData}
          handleClick={handleRepeat}
          handleModalClose={handleModalClose}
        />
      </Modal>
    </ServiceCard>
  );
}

export default SavingsListCard;

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
  ButtonsControlerBox,
} from "./SavingsListCard.style";

import { BsCashStack } from "react-icons/bs";

import { accounts } from "../../../utils/data/dummyData";
import { ListItemSection } from "../../exchange/ExchangeList/ExchangeList.style";
import { useDispatch, useSelector } from "react-redux";
import { selectSavingArr } from "../../../state-management/Dashboard/services/saving/saving.selector";
import Modal from "../../../components/Modal/Modal";
import { useState } from "react";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import ConfirmActionModal from "../../../components/ConfirmActionModal/ConfirmActionModal";
import Fallback from "../../../components/Fallback/Fallback";
import { fetchSavingWithdraw } from "../../../state-management/Dashboard/services/saving/saving.service";
import { fetchSavingTopUp } from "../../../state-management/Dashboard/services/saving/saving.service";

const data = accounts[0].savings;

function SavingsListCard() {
  const dipatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
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
                <ButtonsControlerBox>
                  <Button
                    label="Top-Up"
                    size="sm"
                    primary="primary"
                    // onClick={() => handleModalOpen(saving.id)}
                    onClick={() =>
                      dipatch(fetchSavingTopUp(savingData, saving))
                    }
                  />
                  <Button
                    label="Withdraw"
                    size="sm"
                    primary="primary"
                    onClick={() =>
                      dipatch(fetchSavingWithdraw(savingData, saving))
                    }
                  />
                </ButtonsControlerBox>
              </ListItem>
            ))}
          </>
        ) : (
          <Fallback
            text={`No Saving to display. Start by making your first saving to track your finances. Click the "New Saving" button to record it.`}
          />
        )}
      </ListContainer>
      <Modal opened={modalOpen} handleClick={handleModalClose}>
        <ConfirmActionModal
          action="top-up"
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

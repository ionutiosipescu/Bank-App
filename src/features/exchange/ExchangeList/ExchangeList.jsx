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
import Modal from "./../../../components/Modal/Modal";
import { useState } from "react";
import ConfirmActionModal from "../../../components/ConfirmActionModal/ConfirmActionModal";

function ExchangeList() {
  const dispatch = useDispatch();
  const exchangeArr = useSelector(selectExchangeArr);
  const currentUser = useSelector(selectCurrentUser);
  const setExchangeArr = (currency) => {
    const string =
      currency === "RonToEuro" ? `RON \u{2194} EURO` : `EURO \u{2194} RON`;
    return string;
  };

  const handleRepeat = () => {
    dispatch(fetchExchangeRepeat(modalData, exchangeArr, currentUser));
    setModalOpen(false);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(exchangeArr[0]);

  const handleModalOpen = (id) => {
    setModalOpen(true);
    setModalData(exchangeArr.find((transfer) => transfer.id === id));
  };

  const handleModalClose = () => {
    setModalOpen(false);
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
              onClick={() => handleModalOpen(transfer.id)}
            />
          </ListItem>
        ))}
      </ListContainer>
      <Modal opened={modalOpen} handleClick={handleModalClose}>
        <ConfirmActionModal
          action="repeat"
          type="exchange"
          text={modalData.type_exchange}
          amount={modalData.exchange}
          incaceva={modalData.receiver}
          data={modalData}
          feature="5.23"
          handleClick={handleRepeat}
        />
      </Modal>
    </ServiceCard>
  );
}

export default ExchangeList;

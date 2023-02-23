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
import { selectExchangeArr } from "../../../state-management/Dashboard/services/exchange/exchange.selector";
import { fetchExchangeRepeat } from "../../../state-management/Dashboard/services/exchange/exchange.service";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import { SelectAccountToggle } from "../../deposits/DepositsControlerCard/DepositControlerCard.style";
import SmallDropdown from "../../cardsPage/Dropdown/Dropdown";
import { DepositHeaderList } from "../../deposits/DepositsListCard/DepositsListCard.style";
import { selectExchangeOption } from "../../../state-management/Dashboard/services/exchange/exchange.selector";
import { setSelectedOptionExchange } from "../../../state-management/Dashboard/services/exchange/exchange.action";
import Modal from "../../../components/Modal/Modal";
import ConfirmActionModal from "../../../components/ConfirmActionModal/ConfirmActionModal";
import { useState } from "react";
import Fallback from "../../../components/Fallback/Fallback";

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

  const handleRepeat = () => {
    dispatch(fetchExchangeRepeat(modalData, exchangeArr, currentUser));
    setModalOpen(false);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  const handleModalOpen = (id) => {
    setModalOpen(true);
    setModalData(exchangeArr.find((transfer) => transfer.id === id));
  };

  const handleModalClose = () => {
    setModalOpen(false);
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
            selectedOption={selectedOptionExchange?.currency}
            handleChange={(e) =>
              dispatch(setSelectedOptionExchange(e, selectedOptionExchange))
            }
          />
        </SelectAccountToggle>
      </DepositHeaderList>
      <ListContainer>
        {exchangeArr.length > 0 ? (
          <>
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
          </>
        ) : (
          <Fallback
            text={`No Exchange to display. Start by making your first exchange to track your finances. Click the "Exchange" button to record it.`}
          />
        )}
      </ListContainer>
      <Modal opened={modalOpen} handleClick={handleModalClose}>
        <ConfirmActionModal
          action="repeat"
          type="exchange"
          text={modalData.type_exchange}
          amount={modalData.exchange}
          data={modalData}
          feature="5.23"
          featureText="Rate"
          handleClick={handleRepeat}
          handleModalClose={handleModalClose}
        />
      </Modal>
    </ServiceCard>
  );
}

export default ExchangeList;

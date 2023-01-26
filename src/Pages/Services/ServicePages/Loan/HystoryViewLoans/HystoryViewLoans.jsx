import React, { useEffect, useState } from "react";
import { BsCashStack } from "react-icons/bs";
import { CardHeader } from "../../../../../components/TopCard/TopCard.style";
import Button from "../../../../../components/UI/Button/Button";
import { ServiceViewCard } from "../../../../../components/UI/Card/Card.style";
import { ListItemSection } from "../../../../../features/exchange/ExchangeList/ExchangeList.style";
import {
  AmountContainer,
  IdContainer,
  LabelContainer,
  ListContainer,
  ListIcon,
  ListItem,
} from "../../../../../features/savings/SavingsListCard/SavingsListCard.style";
import { NewContainer } from "../../../../Cards/Cards.style";

import { accounts } from "../../../../../utils/data/dummyData";
import LinkButton from "../../../../../components/UI/LinkButton/LinkButton";
import ProgressCard from "../../../../../components/ProgressCard/ProgressCard";
import Modal from "../../../../../components/Modal/Modal";
import LoanPayCard from "../../../../../components/LoanPayCard/LoanPayCard";

const data = accounts[0].savings;

const loans = [
  {
    id: 23,
    date: "2021-11-22",
    amount: 7000,
    paid: 6320,
    details: "Car",
  },
  {
    id: 24,
    date: "2020-04-12",
    amount: 150000,
    paid: 96278,
    details: "House",
  },
  {
    id: 25,
    date: "2023-01-02",
    amount: 2000,
    paid: 100,
    details: "Personal",
  },
];

function HisotryViewLoans({ dataServices }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleModalOpen = (id) => {
    setModalOpen(true);
    setModalData(loans.find((loan) => loan.id === id));
  };

  const handleModalClose = () => {
    setModalData(null);
    setModalOpen(false);
  };

  console.log(modalData);
  // console.log(dataServices);
  return (
    <>
      <NewContainer>
        {loans.map((loan) => (
          <ProgressCard
            key={loan.id}
            title={loan.details}
            amount={loan.amount}
            paid={loan.paid}
            handleClick={() => handleModalOpen(loan.id)}
          />
        ))}
        <LinkButton
          label="New Loan"
          primary="primary"
          size="md"
          to={dataServices.path}
        />
      </NewContainer>
      <ServiceViewCard>
        <CardHeader style={{ height: "10%" }}>
          <h2>Savings</h2>
        </CardHeader>
        <ListContainer>
          {data.map((saving, id) => (
            <ListItem key={id}>
              <ListItemSection>
                <ListIcon>
                  <BsCashStack />
                </ListIcon>
                <LabelContainer>{saving.label}</LabelContainer>
                <AmountContainer>Sum: {saving.amount}</AmountContainer>
                <IdContainer>ID {saving.id}</IdContainer>
              </ListItemSection>
              <Button label="Top-Up" size="sm" primary="primary" />
              <Button label="Withdraw" size="sm" />
            </ListItem>
          ))}
        </ListContainer>
      </ServiceViewCard>
      <Modal opened={modalOpen} handleClick={handleModalClose}>
        <LoanPayCard data={modalData} />
      </Modal>
    </>
  );
}

export default HisotryViewLoans;

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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCurrentUser } from "../../../../../state-management/Dashboard/userData/userData.selector";
import { getLoansArrDb } from "../../../../../state-management/Dashboard/services/loans/loans.action";
import { selectLoansArr } from "../../../../../state-management/Dashboard/services/loans/loans.selector";
import { selectHistoryLoans } from "../../../../../state-management/Dashboard/services/loans/loans.selector";

const data = accounts[0].savings;

function HisotryViewLoans({ dataServices }) {
  const historyArr = useSelector(selectHistoryLoans);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [totalPaid, setTotalPaid] = useState("");

  const handleModalOpen = (id) => {
    setModalOpen(true);
    setModalData(loansArr.find((loan) => loan.id === id));
  };

  const handleModalClose = () => {
    setModalData(null);
    setModalOpen(false);
  };

  console.log(modalData);
  // console.log(dataServices);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const loansArr = useSelector(selectLoansArr);

  useEffect(() => {
    dispatch(getLoansArrDb(currentUser));
  }, []);
  console.log(loansArr);

  return (
    <>
      <NewContainer>
        {loansArr?.map((loan) => (
          <ProgressCard
            key={loan.id}
            title={loan.details}
            amount={loan.loan}
            paid={loan.total_paid}
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
          {historyArr?.map((history_loan, id) => (
            <ListItem key={id}>
              <ListItemSection>
                <ListIcon>
                  <BsCashStack />
                </ListIcon>
                <LabelContainer>{history_loan.details}</LabelContainer>
                <AmountContainer>Sum: {history_loan.rate}</AmountContainer>
                <IdContainer>ID {history_loan.id}</IdContainer>
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

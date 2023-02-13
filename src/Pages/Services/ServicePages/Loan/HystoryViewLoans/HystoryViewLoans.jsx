import React, { useEffect, useState } from "react";
import { BsCashStack } from "react-icons/bs";
import { CardHeader } from "../../../../../components/TopCard/TopCard.style";
import Button from "../../../../../components/UI/Button/Button";
import { ServiceViewCard } from "../../../../../components/UI/Card/Card.style";
import {
  ListItemSection,
  RateContainer,
} from "../../../../../features/exchange/ExchangeList/ExchangeList.style";
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
import NewLoanCard from "../../../../../features/loans/NewLoanCard/NewLoanCard";

const data = accounts[0].savings;

function HisotryViewLoans({ dataServices, ...props }) {
  const historyArr = useSelector(selectHistoryLoans);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  // const [totalPaid, setTotalPaid] = useState("");

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
        {loansArr?.map((loan, index) => (
          <ProgressCard
            key={index}
            title={loan.details}
            amount={loan.loan}
            paid={Math.round(loan.total_paid)}
            handleClick={() => handleModalOpen(loan.id)}
          />
        ))}
        <NewLoanCard />
      </NewContainer>
      <ServiceViewCard>
        <CardHeader>
          <h1>Loans</h1>
        </CardHeader>
        <ListContainer>
          {historyArr?.map((history_loan, id) => (
            <ListItem key={id}>
              <ListItemSection>
                <ListIcon>
                  <BsCashStack />
                </ListIcon>
                <LabelContainer>
                  Loan:{" "}
                  {history_loan.details.charAt(0).toUpperCase() +
                    history_loan.details.slice(1)}
                </LabelContainer>
                <AmountContainer>
                  Payment: {history_loan.rate} RON
                </AmountContainer>
                <IdContainer>#{history_loan.id}</IdContainer>
              </ListItemSection>
              <Button
                size="md"
                primary="primary"
                label="Pay Loan"
                onClick={() => handleModalOpen(history_loan.id)}
              />
            </ListItem>
          ))}
        </ListContainer>
      </ServiceViewCard>
      <Modal opened={modalOpen} handleClick={handleModalClose}>
        <LoanPayCard data={modalData} handleModalClose={handleModalClose} />
      </Modal>
    </>
  );
}

export default HisotryViewLoans;

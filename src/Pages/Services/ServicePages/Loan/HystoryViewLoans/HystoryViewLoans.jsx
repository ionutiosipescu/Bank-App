import React, { useEffect, useState } from "react";
// Style
import { CardHeader } from "../../../../../components/TopCard/TopCard.style";
import { ServiceViewCard } from "../../../../../components/UI/Card/Card.style";
import { ListItemSection } from "../../../../../features/exchange/ExchangeList/ExchangeList.style";
import { NewContainer } from "../../../../Cards/Cards.style";
import {
  AmountContainer,
  IdContainer,
  LabelContainer,
  ListContainer,
  ListIcon,
  ListItem,
} from "../../../../../features/savings/SavingsListCard/SavingsListCard.style";

// Components
import { BsCashStack } from "react-icons/bs";
import Button from "../../../../../components/UI/Button/Button";
import NewLoanCard from "../../../../../features/loans/NewLoanCard/NewLoanCard";
import ProgressCard from "../../../../../components/ProgressCard/ProgressCard";
import LoanPayCard from "../../../../../components/LoanPayCard/LoanPayCard";
import Modal from "../../../../../components/Modal/Modal";

// State/Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCurrentUser } from "../../../../../state-management/Dashboard/userData/userData.selector";
import { getLoansArrDb } from "../../../../../state-management/Dashboard/services/loan/loan.service";
import { selectLoansArr } from "../../../../../state-management/Dashboard/services/loan/loan.selector";
import { selectHistoryLoans } from "../../../../../state-management/Dashboard/services/loan/loan.selector";
import Fallback from "../../../../../components/Fallback/Fallback";
import {
  ImageContainer,
  NewLoanCardContainer,
} from "../../../../../features/loans/NewLoanCard/NewLoanCard.style";
import { selectCsrf } from "../../../../../state-management/Auth/login/login.selector";

import loanImg from "../../../../../assets/images/noLoans.png";

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
  const csrf = useSelector(selectCsrf);
  const loansArr = useSelector(selectLoansArr);

  useEffect(() => {
    dispatch(getLoansArrDb(currentUser, csrf));
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
        {loansArr.length < 1 ? (
          <NewLoanCardContainer>
            <ImageContainer>
              <img src={loanImg} alt="" />
            </ImageContainer>
          </NewLoanCardContainer>
        ) : (
          ""
        )}
        <NewLoanCard loans={loansArr.length} />
      </NewContainer>
      <ServiceViewCard>
        <CardHeader>
          <h1>Payments</h1>
        </CardHeader>
        <ListContainer>
          {historyArr.length > 0 ? (
            <>
              {historyArr?.map((history_loan, id) => (
                <ListItem key={id}>
                  <ListItemSection>
                    <ListIcon>
                      <BsCashStack />
                    </ListIcon>
                    <LabelContainer>
                      Loan Type:{" "}
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
            </>
          ) : (
            <Fallback
              text={`No Payments to display. Start by making your first loan to track your finances. Click the "RequestLoan" button to record it.`}
            />
          )}
        </ListContainer>
      </ServiceViewCard>
      <Modal opened={modalOpen} handleClick={handleModalClose}>
        <LoanPayCard data={modalData} handleModalClose={handleModalClose} />
      </Modal>
    </>
  );
}

export default HisotryViewLoans;

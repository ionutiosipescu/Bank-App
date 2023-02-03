import React from "react";
import { DepositWrapper } from "./Deposit.style";
import DepositsControlerCard from "../../../../features/deposits/DepositsControlerCard/DepositsControlerCard";
import DepositsListCard from "../../../../features/deposits/DepositsListCard/DepositsListCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCurrentUser } from "../../../../state-management/Dashboard/userData/userData.selector";
import { selectDepositForm } from "../../../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";
import { getDepositArrDb } from "../../../../state-management/Dashboard/services/helpers/depositsHelper/depositsHelper.action";
import { useEffect } from "react";

function Deposit() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const depositForm = useSelector(selectDepositForm);

  useEffect(() => {
    dispatch(getDepositArrDb(depositForm, currentUser));
  }, []);
  return (
    <DepositWrapper>
      <DepositsListCard />
      <DepositsControlerCard />
    </DepositWrapper>
  );
}

export default Deposit;

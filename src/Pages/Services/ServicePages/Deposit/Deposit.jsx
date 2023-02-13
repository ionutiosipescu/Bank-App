import React, { useEffect } from "react";
// Style
import { DepositWrapper } from "./Deposit.style";

// Components
import DepositsControlerCard from "../../../../features/deposits/DepositsControlerCard/DepositsControlerCard";
import DepositsListCard from "../../../../features/deposits/DepositsListCard/DepositsListCard";

// State/Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCurrentUser } from "../../../../state-management/Dashboard/userData/userData.selector";
import { selectDepositForm } from "../../../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";
import { getDepositArrDb } from "../../../../state-management/Dashboard/services/helpers/depositsHelper/deposit.service";
import { selectDepositFilter } from "../../../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";

function Deposit() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const filterObj = useSelector(selectDepositFilter);

  useEffect(() => {
    dispatch(getDepositArrDb(filterObj, currentUser));
  }, [filterObj]);
  return (
    <DepositWrapper>
      <DepositsListCard />
      <DepositsControlerCard />
    </DepositWrapper>
  );
}

export default Deposit;

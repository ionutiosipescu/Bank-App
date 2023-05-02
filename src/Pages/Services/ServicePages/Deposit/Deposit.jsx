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
import { getDepositArrDb } from "../../../../state-management/Dashboard/services/deposit/deposit.service";
import { selectDepositOption } from "../../../../state-management/Dashboard/services/deposit/deposit.selector";
import { selectCsrf } from "../../../../state-management/Auth/login/login.selector";

function Deposit() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const csrf = useSelector(selectCsrf);
  const filterObj = useSelector(selectDepositOption);

  useEffect(() => {
    dispatch(getDepositArrDb(filterObj, currentUser, csrf));
  }, [filterObj]);
  return (
    <DepositWrapper>
      <DepositsListCard />
      <DepositsControlerCard />
    </DepositWrapper>
  );
}

export default Deposit;

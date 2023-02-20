import React from "react";
import SavingsListCard from "../../../../features/savings/SavingsListCard/SavingsListCard";
import SavingsInputCard from "../../../../features/savings/SavingsInputCard/SavingsInputCard";
import { SavingsWrapper } from "./Savings.style";
import { getSavingArr } from "../../../../state-management/Dashboard/services/saving/saving.action";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../state-management/Dashboard/userData/userData.selector";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Savings() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(getSavingArr(currentUser));
  }, []);
  return (
    <SavingsWrapper>
      <SavingsListCard />
      <SavingsInputCard />
    </SavingsWrapper>
  );
}

export default Savings;

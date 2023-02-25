import React from "react";
import HisotryViewTransfers from "./HistoryViewTransfers/HistoryViewTransfers";
import { transferPath } from "../../../../utils/data/dummyData";
import { useDispatch, useSelector } from "react-redux";
import { selectOptionTransfer } from "../../../../state-management/Dashboard/services/transfer/transfer.selector";
import { selectCurrentUser } from "../../../../state-management/Dashboard/userData/userData.selector";
import { useEffect } from "react";
import { getTransferArr } from "../../../../state-management/Dashboard/services/transfer/transfer.service";

function Transfers() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const transferOption = useSelector(selectOptionTransfer);

  useEffect(() => {
    dispatch(getTransferArr(transferOption, currentUser));
  }, [transferOption]);

  return (
    <>
      <HisotryViewTransfers dataServices={transferPath} />
    </>
  );
}

export default Transfers;

import React from "react";
import HisotryViewTransfers from "./HistoryViewTransfers/HistoryViewTransfers";
import { transfersArr } from "../../../../utils/data/dummyData";

function Transfers() {
  return (
    <>
      <HisotryViewTransfers dataServices={transfersArr} />
    </>
  );
}

export default Transfers;

import React from "react";
import HisotryViewTransfers from "./HistoryViewTransfers/HistoryViewTransfers";
import { transferPath } from "../../../../utils/data/dummyData";

function Transfers() {
  return (
    <>
      <HisotryViewTransfers dataServices={transferPath} />
    </>
  );
}

export default Transfers;

import React from "react";
import TransfersView from "../TransfersView/TransfersView";
import { transfersArr } from "../../utils/data/dummyData";
function Transfers() {
  console.log(transfersArr);
  return (
    <>
      <TransfersView dataServices={transfersArr} />
    </>
  );
}

export default Transfers;

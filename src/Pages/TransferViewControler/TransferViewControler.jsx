import React from "react";
import { Routes, Route } from "react-router-dom";
import TransfersView from "../TransfersView/TransfersView";
import Loans from "../Loans/Loans";
import NewTransfer from "../NewTransfer/NewTransfer";
import Transfers from "../Transfers/Transfers";

function TransferViewControler() {
  return (
    <Routes>
      <Route index element={<Transfers />} />
      <Route path="newtransfer" element={<NewTransfer />}></Route>
      <Route path="newloan" element={<Loans />}></Route>
    </Routes>
  );
}

export default TransferViewControler;

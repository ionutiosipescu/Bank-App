import React from "react";
import { Routes, Route } from "react-router-dom";
import TransfersView from "../TransfersView/TransfersView";
import Loans from "../NewLoan/NewLoan";
import NewTransfer from "../NewTransfer/NewTransfer";
import Transfers from "../Transfers/Transfers";
import NewLoan from "../NewLoan/NewLoan";

function TransferViewControler() {
  return (
    <Routes>
      <Route index element={<Transfers />} />
      <Route path="newtransfer" element={<NewTransfer />}></Route>
    </Routes>
  );
}

export default TransferViewControler;

import React from "react";
import { Routes, Route } from "react-router-dom";
import TransfersView from "../TransfersView/TransfersView";
import NewTransfer from "../NewTransfer/NewTransfer";
import Transfers from "../Transfers/Transfers";
import NewLoan from "../NewLoan/NewLoan";
import Loan from "../Loan/Loan";

function LoansViewControler() {
  return (
    <Routes>
      <Route index element={<Loan />} />
      <Route path="newloan" element={<NewLoan />}></Route>
    </Routes>
  );
}

export default LoansViewControler;

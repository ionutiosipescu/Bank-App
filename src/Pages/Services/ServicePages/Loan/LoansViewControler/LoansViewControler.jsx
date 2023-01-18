import React from "react";
import { Routes, Route } from "react-router-dom";
import NewLoan from "../NewLoan/NewLoan";
import Loan from "../Loan";

function LoansViewControler() {
  return (
    <Routes>
      <Route index element={<Loan />} />
      <Route path="newloan" element={<NewLoan />}></Route>
    </Routes>
  );
}

export default LoansViewControler;

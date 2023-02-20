import React from "react";
import { Routes, Route } from "react-router-dom";
import ServicesNavigation from "../ServicesNavigation/ServicesNavigation";
import ServiceHome from "../ServiceHome/ServiceHome";
import Savings from "../ServicePages/Savings/Savings";
import Exchange from "../ServicePages/Exchange/Exchange";
import TransferViewControler from "../ServicePages/Transfers/TransferViewControler/TransferViewControler";
import LoansViewControler from "../ServicePages/Loan/LoansViewControler/LoansViewControler";
import Deposit from "../ServicePages/Deposit/Deposit";

function ServicesControler() {
  return (
    <Routes>
      <Route path="/" element={<ServicesNavigation />}>
        <Route index element={<ServiceHome />} />
        <Route path="savings" element={<Savings />}></Route>
        <Route path="exchange" element={<Exchange />}></Route>
        <Route path="deposit" element={<Deposit />}></Route>
        <Route path="transfers/*" element={<TransferViewControler />}></Route>
        <Route path="loan/*" element={<LoansViewControler />}></Route>
      </Route>
    </Routes>
  );
}

export default ServicesControler;

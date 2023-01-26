import React from "react";
import { Routes, Route } from "react-router-dom";
// import Service from "../Service/Service";
import ServicesNavigation from "../ServicesNavigation/ServicesNavigation";
import ServiceHome from "../ServiceHome/ServiceHome";
import Savings from "../ServicePages/Savings/Savings";
import Exchange from "../ServicePages/Exchange/Exchange";
// import TransfersView from "../TransfersView/TransfersView";
// import Transfers from "../Transfers/Transfers";
// import NewTransfer from "../NewTransfer/NewTransfer";
// import Loan from "../Loan/Loan";
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
        {/* <Route path="serviceview/*" element={<TransfersView />}></Route> */}
        {/* <Route path=":service" element={<Service />} /> */}
      </Route>
    </Routes>
  );
}

export default ServicesControler;
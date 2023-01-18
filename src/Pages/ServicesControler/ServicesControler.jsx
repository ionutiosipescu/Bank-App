import React from "react";
import { Routes, Route } from "react-router-dom";
import Service from "../Service/Service";
import ServicesNavigation from "../ServicesNavigation/ServicesNavigation";
import ServiceHome from "../ServiceHome/ServiceHome";
import Savings from "../Savings/Savings";
import Exchange from "../Exchange/Exchange";
import TransfersView from "../TransfersView/TransfersView";
import Transfers from "../Transfers/Transfers";
import Loans from "../Loans/Loans";
import NewTransfer from "../NewTransfer/NewTransfer";
import TransferViewControler from "../TransferViewControler/TransferViewControler";

function ServicesControler() {
  return (
    <Routes>
      <Route path="/" element={<ServicesNavigation />}>
        <Route index element={<ServiceHome />} />
        <Route path="savings" element={<Savings />}></Route>
        <Route path="exchange" element={<Exchange />}></Route>
        <Route path="loans" element={<Loans />}></Route>
        <Route path="transfers/*" element={<TransferViewControler />}></Route>
        {/* <Route path="serviceview/*" element={<TransfersView />}></Route> */}
        {/* <Route path=":service" element={<Service />} /> */}
      </Route>
    </Routes>
  );
}

export default ServicesControler;

// trebuie refacut ServicesControler dupa modelul de jos
{
  /* <Routes>
<Route path="/" element={<Navigation />}>
  <Route index element={<Home />} />
  <Route path="shop/*" element={<Shop />} />
  <Route path="auth" element={<Authentication />} />
  <Route path="checkout" element={<Checkout />} />
</Route>
</Routes> */
}

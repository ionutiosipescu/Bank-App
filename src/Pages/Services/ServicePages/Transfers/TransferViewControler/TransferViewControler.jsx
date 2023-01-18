import React from "react";
import { Routes, Route } from "react-router-dom";
import NewTransfer from "../NewTransfer/NewTransfer";
import Transfers from "../Transfers";

function TransferViewControler() {
  return (
    <Routes>
      <Route index element={<Transfers />} />
      <Route path="newtransfer" element={<NewTransfer />}></Route>
    </Routes>
  );
}

export default TransferViewControler;

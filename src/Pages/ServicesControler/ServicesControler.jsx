import React from "react";
import { Routes, Route } from "react-router-dom";
import Savings from "../Savings/Savings";
import Service from "../Service/Service";
import ServicesNavigation from "../ServicesNavigation/ServicesNavigation";
import ServiceHome from "../ServiceHome/ServiceHome";

function ServicesControler() {
  return (
    <Routes>
      <Route path="/" element={<ServicesNavigation />}>
        <Route index element={<ServiceHome />} />
        <Route path=":service" element={<Service />} />
      </Route>
    </Routes>
  );
}

export default ServicesControler;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Services from "../Services/Services";
import Savings from "../Savings/Savings";
import Service from "../Service/Service";

function ServicesControler() {
  return (
    <Routes>
      <Route index element={<Services />} />
      <Route path=":service" element={<Service />} />
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

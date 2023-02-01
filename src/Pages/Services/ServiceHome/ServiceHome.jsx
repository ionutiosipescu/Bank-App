import React from "react";
import ServiceHomePresentation from "../ServiceHomePresentation/ServiceHomePresentation";
import { Outlet } from "react-router";

function ServiceHome() {
  return (
    <>
      <ServiceHomePresentation />
      <Outlet />
    </>
  );
}

export default ServiceHome;

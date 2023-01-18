import React from "react";
import ServiceHomePresentation from "../ServiceHomePresentation/ServiceHomePresentation";
import { Outlet } from "react-router";

function ServiceHome() {
  return (
    <div>
      <ServiceHomePresentation />
      <Outlet />
    </div>
  );
}

export default ServiceHome;

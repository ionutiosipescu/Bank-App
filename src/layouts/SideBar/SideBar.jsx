import React from "react";
import { SideBarWrapper } from "./SideBar.style";

function SideBar({ children }) {
  return <SideBarWrapper>{children}</SideBarWrapper>;
}

export default SideBar;

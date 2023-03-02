import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { HomeContainer, HomeWrapper } from "./Home.style";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../state-management/Dashboard/userData/userData.selector";
import { selectOptionTransfer } from "../../state-management/Dashboard/services/transfer/transfer.selector";
import { getTransferArr } from "../../state-management/Dashboard/services/transfer/transfer.service";

import SideBar from "../../layouts/SideBar/SideBar";
import Dashboard from "./../Dashboard/Dashboard";
import Cards from "../Cards/Cards";
import NavBar from "./../../layouts/NavBar/NavBar";
import Settings from "../../pages/Settings/Settings";
import Profile from "./../Profile/Profile";
// import Savings from "./../Savings/Savings";
// import Loans from "../NewLoan/NewLoan";
// import Exchange from "../Exchange/Exchange";
// import Transfers from "./../Transfers/Transfers";
// import Deposit from "../Deposit/Deposit";
import NewTransfer from "../Services/ServicePages/Transfers/NewTransfer/NewTransfer";
import ServicesControler from "../Services/ServicesControler/ServicesControler";
import { selectDarkMode } from "../../state-management/Dashboard/dashboard/dashboard.selector";

function Home() {
  const darkMode = useSelector(selectDarkMode);
  console.log(darkMode);

  // Variable to set the active state of the Sidebar
  const [active, setActive] = useState("active");
  // Variable to store the viewport width
  const [viewportWidth, setViewportWidth] = useState(0);

  // Create a function to update the viewport width state
  const updateViewportWidth = () => {
    setViewportWidth(window.innerWidth);
  };

  // Update the viewport width state when the component is first rendered
  useEffect(() => {
    updateViewportWidth();
  }, []);

  // Bind the updateViewportWidth function to the resize event on the window object
  useEffect(() => {
    window.addEventListener("resize", updateViewportWidth);
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  // Update the active state of the Sidebar so that it updates based on the width so that on desktop it's true and on moblie/tablet is set to false as default on resize
  useEffect(() => {
    setActive(viewportWidth >= 1050 ? "active" : "notActive");
    return () => {
      setActive("active");
    };
  }, [viewportWidth]);

  // Handle click event to minimize the Sidebar on mobile/tablet
  const handleActive = () => {
    setActive(active === "active" ? "notActive" : "active");
  };

  return (
    <HomeWrapper className={darkMode && "dark"}>
      <SideBar
        active={active}
        handleActive={handleActive}
        width={viewportWidth}
      />
      <HomeContainer active={active}>
        <NavBar />
        <Routes>
          <Route path="dashboard" title="Dashboard" element={<Dashboard />} />
          <Route path="cards" element={<Cards />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="services/*" element={<ServicesControler />} />
          <Route path="newtransfer" element={<NewTransfer />} />
        </Routes>
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;

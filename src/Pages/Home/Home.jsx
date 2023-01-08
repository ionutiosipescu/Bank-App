import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { HomeContainer, HomeWrapper } from "./Home.style";

import SideBar from "../../layouts/SideBar/SideBar";
import Dashboard from "./../Dashboard/Dashboard";
import Cards from "../Cards/Cards";
import NavBar from "./../../layouts/NavBar/NavBar";
import Settings from "../../Pages/Settings/Settings";
import Profile from "./../Profile/Profile";
import Services from "./../Services/Services";
import Savings from "./../Savings/Savings";
import Loans from "../Loans/Loans";
import Exchange from "../Exchange/Exchange";
import Transfers from "./../Transfers/Transfers";
import Deposit from "../Deposit/Deposit";
import NewTransfer from "../NewTransfer/NewTransfer";

function Home() {
  // Variable to set the active state of the Sidebar
  const [active, setActive] = useState("");
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
    setActive(viewportWidth >= 1050 ? true : false);
    return () => {
      setActive(true);
    };
  }, [viewportWidth]);

  // Handle click event to minimize the Sidebar on mobile/tablet
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <HomeWrapper>
      <SideBar active={active} handleActive={handleActive} />
      <HomeContainer active={active}>
        <NavBar />
        <Routes>
          <Route path="/dashboard" title="Dashboard" element={<Dashboard />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/newtransfer" element={<NewTransfer />} />
        </Routes>
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;

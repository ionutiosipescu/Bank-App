import React, { useState } from "react";
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

function Home() {
  const [active, setActive] = useState(true);

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
        </Routes>
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;

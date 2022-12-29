import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomeContainer, HomeWrapper } from "./Home.style";

import SideBar from "../../layouts/SideBar/SideBar";
import Dashboard from "./../Dashboard/Dashboard";
import Cards from "../Cards/Cards";
import NavBar from "./../../layouts/NavBar/NavBar";
import Settings from "../../Pages/Settings/Settings";
import Transactions from "../Transactions/Transactions";

// import logo from "../../assets/images/logo.png";

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
          <Route
            path="/transactions"
            title="Transactions"
            element={<Transactions />}
          />
          <Route path="/cards" element={<Cards />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { HomeContainer, HomeWrapper, TemporaryNav } from "./Home.style";
import { BsCreditCard, BsHouseDoor } from "react-icons/bs";

import Dashboard from "./../Dashboard/Dashboard";
import Button from "../../components/UI/Button/Button";
import Cards from "../Cards/Cards";
import NavBtn from "../../components/UI/NavBtn/NavBtn";
import logo from "../../assets/images/logo.png";
import SideBar from "../../layouts/SideBar/SideBar";

function Home() {
  return (
    <HomeWrapper>
      <SideBar>
        <div>
          <img src={logo} style={{ width: "100%", marginBottom: "50px" }} />
          <NavBtn to="/dashboard" label="Dashboard">
            <BsHouseDoor size={22} />
          </NavBtn>
          <NavBtn to="/cards" label="Cards">
            <BsCreditCard size={22} />
          </NavBtn>
          <NavBtn to="/" label="Transactions">
            <BsCreditCard size={22} />
          </NavBtn>
          <NavBtn to="/dashboard" label="Settings">
            <BsCreditCard size={22} />
          </NavBtn>
        </div>
        <Button label="Log Out" to="/login" size="100" isPrimary />
      </SideBar>
      <HomeContainer>
        <h1>Navigation Bar</h1>
        <Routes>
          <Route path="/dashboard" title="Dashboard" element={<Dashboard />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/transfers" element={<Dashboard />} />
        </Routes>
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;

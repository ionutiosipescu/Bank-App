import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomeWrapper, TemporaryNav } from "./Home.style";
import { BsCreditCard, BsHouseDoor } from "react-icons/bs";

import Dashboard from "./../Dashboard/Dashboard";
import Button from "../../components/UI/Button/Button";
import Cards from "../Cards/Cards";
import NavBtn from "../../components/UI/NavBtn/NavBtn";
import logo from "../../assets/images/logo.png";

function Home() {
  return (
    <HomeWrapper>
      <TemporaryNav>
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
      </TemporaryNav>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/transfers" element={<Dashboard />} />
      </Routes>
    </HomeWrapper>
  );
}

export default Home;

import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomeContainer, HomeWrapper } from "./Home.style";
import { BsCreditCard, BsHouseDoor } from "react-icons/bs";

import Dashboard from "./../Dashboard/Dashboard";
import Button from "../../components/UI/Button/Button";
import Cards from "../Cards/Cards";
import NavBtn from "../../components/UI/NavBtn/NavBtn";
import logo from "../../assets/images/logo.png";
import SideBar from "../../layouts/SideBar/SideBar";
import NavBar from "./../../layouts/NavBar/NavBar";
import Settings from "../../Pages/Settings/Settings";

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
          <NavBtn to="/" label="Settings">
            <BsCreditCard size={22} />
          </NavBtn>
        </div>
        <Button label="Log Out" to="/login" size="100" primary={true} />
      </SideBar>
      <HomeContainer>
        <NavBar />
        <Routes>
          <Route path="/dashboard" title="Dashboard" element={<Dashboard />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;

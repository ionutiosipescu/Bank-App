import React from "react";
import "./Home.css";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./../Dashboard/Dashboard";
import Button from "../../components/UI/Button/Button";
import Cards from "../Cards/Cards";

function Home() {
  return (
    <div className="home">
      <div className="nav">
        <Button label="Log In" to="/login" size="100" isPrimary />
        <Button label="Dashboard" to="/dashboard" size="100" isPrimary />
        <Button label="Cards" to="/cards" size="100" isPrimary />
      </div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/transfers" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default Home;

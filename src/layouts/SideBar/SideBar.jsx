import React, { useState } from "react";
import { BtnContainer, LogoContainer, SideBarWrapper } from "./SideBar.style";

import NavBtn from "../../components/UI/NavBtn/NavBtn";
import Button from "../../components/UI/Button/Button";

import { BsCreditCard, BsHouseDoor, BsPersonXFill } from "react-icons/bs";
import { SiWebmoney } from "react-icons/si";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

function SideBar({ active, handleActive }) {
  return (
    <SideBarWrapper active={active}>
      <BtnContainer>
        <LogoContainer active={active} style={{ color: "var(--purple)" }}>
          {active ? (
            <div>
              <h1>BankName</h1>
              <TiChevronLeft
                size={25}
                onClick={handleActive}
                style={{ cursor: "pointer" }}
              />
            </div>
          ) : (
            <>
              <SiWebmoney size={50} color={"var(--purple)"} />
              <TiChevronRight
                size={25}
                onClick={handleActive}
                style={{ cursor: "pointer" }}
              />
            </>
          )}
        </LogoContainer>
        <NavBtn
          to="/dashboard"
          label={active ? "Dashboard" : ""}
          active={active}
        >
          <BsHouseDoor size={22} />
        </NavBtn>
        <NavBtn to="/cards" label={active ? "Cards" : ""} active={active}>
          <BsCreditCard size={22} />
        </NavBtn>
        <NavBtn to="/" label={active ? "Something" : ""} active={active}>
          <BsCreditCard size={22} />
        </NavBtn>
        <NavBtn to="/" label={active ? "Something2" : ""} active={active}>
          <BsCreditCard size={22} />
        </NavBtn>
      </BtnContainer>
      {active ? (
        <Button label="Log Out" to="/login" size="100" primary={true} />
      ) : (
        <Button to="/login" primary={true}>
          <BsPersonXFill size={22} />
        </Button>
      )}
    </SideBarWrapper>
  );
}

export default SideBar;

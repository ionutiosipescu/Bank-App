import React, { useState } from "react";
import { BtnContainer, LogoContainer, SideBarWrapper } from "./SideBar.style";

import NavBtn from "../../components/UI/NavBtn/NavBtn";
import Button from "../../components/UI/Button/Button";

import {
  // BsArrowLeftRight,
  BsCreditCard,
  BsHouseDoor,
  BsPersonXFill,
  BsTools,
} from "react-icons/bs";
import { SiWebmoney } from "react-icons/si";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

const pages = [
  {
    link: "/dashboard",
    label: "Dashboard",
    icon: <BsHouseDoor size={22} />,
  },
  { link: "/cards", label: "Cards", icon: <BsCreditCard size={22} /> },
  { link: "/services", label: "Services", icon: <BsTools size={22} /> },
];

function SideBar({ active, handleActive }) {
  const [selected, setSelected] = useState(null);

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
        {pages.map((page, index) => (
          <NavBtn
            to={page.link}
            label={active ? page.label : ""}
            active={active}
            onClick={() => setSelected(index)}
            selected={selected === index ? true : false}
          >
            {page.icon}
          </NavBtn>
        ))}
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

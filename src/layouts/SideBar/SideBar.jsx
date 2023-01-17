import React, { useState } from "react";
import {
  BtnContainer,
  ChevronWrapper,
  LogoContainer,
  SideBarWrapper,
} from "./SideBar.style";

import NavBtn from "../../components/UI/NavBtn/NavBtn";

import {
  BsCreditCard,
  BsHouseDoor,
  BsPersonXFill,
  BsTools,
} from "react-icons/bs";
import { SiWebmoney } from "react-icons/si";
import { TiChevronLeft, TiChevronRight, TiPlus } from "react-icons/ti";

import Button from "./../../components/UI/Button/Button";
import LinkButton from "./../../components/UI/LinkButton/LinkButton";

const pages = [
  {
    link: "dashboard",
    label: "Dashboard",
    icon: <BsHouseDoor size={22} />,
  },
  { link: "cards", label: "Cards", icon: <BsCreditCard size={22} /> },
  { link: "services", label: "Services", icon: <BsTools size={22} /> },
];

function SideBar({ active, handleActive }) {
  const [selected, setSelected] = useState(null);

  return (
    <SideBarWrapper active={active}>
      <ChevronWrapper>
        <TiPlus size={20} onClick={handleActive} />
      </ChevronWrapper>
      <BtnContainer>
        <LogoContainer active={active}>
          {active ? (
            <div>
              <h1>BankName</h1>
              <TiChevronLeft size={25} onClick={handleActive} />
            </div>
          ) : (
            <>
              {" "}
              <SiWebmoney size={50} color={"var(--purple)"} />
              <TiChevronRight size={25} onClick={handleActive} />
            </>
          )}
        </LogoContainer>
        {pages.map((page, index) => (
          <NavBtn
            to={page.link}
            label={active ? page.label : ""}
            size="round"
            active={active}
            onClick={() => setSelected(index)}
            selected={selected === index ? true : false}
            key={index}
          >
            {page.icon}
          </NavBtn>
        ))}
      </BtnContainer>
      {active ? (
        <LinkButton label="Log Out" to="/login" size="100" primary={true} />
      ) : (
        <LinkButton to="/login" primary={true}>
          <BsPersonXFill size={22} />
        </LinkButton>
      )}
    </SideBarWrapper>
  );
}

export default SideBar;

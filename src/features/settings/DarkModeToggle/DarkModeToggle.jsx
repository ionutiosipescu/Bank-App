import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode } from "../../../state-management/Dashboard/dashboard/dashboard.selector";
import { setDarkMode } from "./../../../state-management/Dashboard/dashboard/dashboard.action";
import {
  ToggleCircle,
  ToggleContainer,
  TogglePill,
} from "./DarkModeToggle.style";

function DarkModeToggle() {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  const [toggleState, setToggleState] = useState(darkMode ? "On" : "Off");

  const handleRadio = () => {
    setToggleState(toggleState === "On" ? "Off" : "On");
    dispatch(setDarkMode(!darkMode));
  };

  return (
    <ToggleContainer active={darkMode}>
      <TogglePill active={darkMode}>
        <p>{toggleState}</p>
        <ToggleCircle
          onClick={(e) => {
            handleRadio();
          }}
        />
      </TogglePill>
    </ToggleContainer>
  );
}

export default DarkModeToggle;

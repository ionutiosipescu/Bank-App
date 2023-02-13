import React, { useEffect, useState } from "react";
import { RadioCircle, RadioContainer, RadioPill } from "./RadioButton.style";
import { selectDepositFilter } from "../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";
import { useSelector } from "react-redux";

function RadioButton({
  label,
  defaultMode,
  firstText,
  secondText,
  checked,
  ...props
}) {
  const [active, setActive] = useState(defaultMode);
  const [toggleState, setToggleState] = useState(firstText);
  const handleRadio = () => {
    setToggleState(toggleState === secondText ? firstText : secondText);
    setActive(active === "active" ? "notActive" : "active");
  };

  return (
    <RadioContainer active={active}>
      {/* <p>{label} </p> */}
      <RadioPill active={active}>
        <p>{active === "active" ? firstText : secondText} </p>
        <RadioCircle
          onClick={(e) => {
            handleRadio();
            props.setDataToggle(toggleState);
          }}
          name={props.name}
        />
      </RadioPill>
    </RadioContainer>
  );
}

export default RadioButton;

import React, { useState } from "react";
// Style
import { RadioCircle, RadioContainer, RadioPill } from "./RadioButton.style";

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

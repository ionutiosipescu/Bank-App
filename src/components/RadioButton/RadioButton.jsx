import React, { useState } from "react";
import { RadioCircle, RadioContainer, RadioPill } from "./RadioButton.style";

function RadioButton({ label, defaultMode }) {
  const [active, setActive] = useState(defaultMode);

  const handleRadio = () => {
    setActive(!active);
  };

  return (
    <RadioContainer active={active}>
      <p>{label} </p>
      <RadioPill active={active}>
        <p>{active ? "On" : "Off"} </p>
        <RadioCircle onClick={handleRadio} />
      </RadioPill>
    </RadioContainer>
  );
}

export default RadioButton;

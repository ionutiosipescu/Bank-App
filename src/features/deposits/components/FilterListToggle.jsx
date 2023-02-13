import React, { useEffect, useState } from "react";
import {
  RadioCircle,
  RadioContainer,
  RadioPill,
} from "../../../components/RadioButton/RadioButton.style";

function FilterListToggle({
  label,
  defaultMode,
  firstText,
  secondText,
  checked,
  ...props
}) {
  const [active, setActive] = useState(defaultMode);
  const [toggleState, setToggleState] = useState("ron");
  const handleRadio = () => {
    setToggleState(toggleState === firstText ? secondText : firstText);
    setActive(active === "active" ? "" : "active");
  };
  useEffect(() => {
    console.log(toggleState);
  }, [toggleState]);

  return (
    <RadioContainer active={active}>
      {/* <p>{label} </p> */}
      <RadioPill active={active}>
        <p>{toggleState}</p>
        <RadioCircle
          onClick={(e) => {
            handleRadio();
            props.setDataToggle(toggleState === "ron" ? "euro" : "");
          }}
          name={props.name}
        />
      </RadioPill>
    </RadioContainer>
  );
}

export default FilterListToggle;

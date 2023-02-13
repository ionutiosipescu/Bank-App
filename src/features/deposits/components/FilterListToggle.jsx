import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  RadioCircle,
  RadioContainer,
  RadioPill,
} from "../../../components/RadioButton/RadioButton.style";
import { selectDepositFilter } from "../../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";

function FilterListToggle({
  label,
  defaultMode,
  firstText,
  secondText,
  checked,
  ...props
}) {
  const filterObj = useSelector(selectDepositFilter);
  const [active, setActive] = useState("");
  const [toggleState, setToggleState] = useState(
    filterObj.account || firstText
  );

  const handleRadio = () => {
    setToggleState(toggleState === firstText ? secondText : firstText);
    setActive(toggleState === "ron" ? "active" : "");
  };

  useEffect(() => {
    setToggleState(filterObj.account);
    setActive(toggleState === "ron" ? "" : "active");
  }, []);

  return (
    <RadioContainer active={active}>
      {/* <p>{label} </p> */}
      <RadioPill active={active}>
        <p>{toggleState}</p>
        <RadioCircle
          onClick={(e) => {
            handleRadio();
            props.setDataToggle(toggleState === "ron" ? "euro" : "ron");
          }}
          name={props.name}
        />
      </RadioPill>
    </RadioContainer>
  );
}

export default FilterListToggle;

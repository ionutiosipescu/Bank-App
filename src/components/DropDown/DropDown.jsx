import React, { useEffect, useState } from "react";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownItem,
  DropDownSelector,
} from "./DropDown.style";

import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

function DropDown({ label, items }) {
  const [selected, setSelected] = useState(items[0]);
  const [active, setActive] = useState("active");

  const handleDropDown = () => {
    if (active === "active") {
      setActive("notActive");
    } else setActive("'active'");
  };

  useEffect(() => {
    console.log(selected, active);
  }, [selected, active]);

  return (
    <DropDownContainer>
      <p>{label}</p>
      <DropDownSelector active={active}>
        <DropDownHeader onClick={handleDropDown}>
          {selected}
          {active === "active" ? (
            <MdArrowDropUp size={40} />
          ) : (
            <MdArrowDropDown size={40} />
          )}
        </DropDownHeader>
        {items.map((item, index) => (
          <DropDownItem
            key={index}
            onClick={() => {
              setSelected(item);
              setActive(active === "active" ? "notActive" : "active");
            }}
            style={selected === item ? { display: "none" } : { display: "" }}
          >
            {item}
          </DropDownItem>
        ))}
      </DropDownSelector>
    </DropDownContainer>
  );
}

export default DropDown;

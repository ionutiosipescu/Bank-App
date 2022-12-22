import React, { useEffect, useState } from "react";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownItem,
  DropDownSelector,
} from "./DropDown.style";

import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const languages = ["English", "Romanian", "French"];

function DropDown({ label }) {
  const [selected, setSelected] = useState(languages[0]);
  const [active, setActive] = useState(false);

  const handleDropDown = () => {
    setActive(!active);
  };

  return (
    <DropDownContainer>
      <p>{label}</p>
      <DropDownSelector active={active}>
        <DropDownHeader onClick={handleDropDown}>
          {selected}
          {active ? <MdArrowDropUp size={40} /> : <MdArrowDropDown size={40} />}
        </DropDownHeader>
        {languages.map((language, index) => (
          <DropDownItem
            key={index}
            onClick={(e) => {
              setSelected(language);
              setActive(false);
            }}
          >
            {language}
          </DropDownItem>
        ))}
      </DropDownSelector>
    </DropDownContainer>
  );
}

export default DropDown;

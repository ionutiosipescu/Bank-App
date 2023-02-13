import React from "react";
import {
  DropdownContainer,
  StyledOption,
  StyledSelect,
} from "./Dropdown.style";

function SmallDropdown(props) {
  const { options, selectedOption, handleChange } = props;

  return (
    <DropdownContainer>
      <StyledSelect
        value={selectedOption || ""}
        onChange={(e) => handleChange(e)}
      >
        {options.map((option) => (
          <StyledOption key={option.value} value={option.value}>
            {option.label}
          </StyledOption>
        ))}
      </StyledSelect>
    </DropdownContainer>
  );
}

export default SmallDropdown;

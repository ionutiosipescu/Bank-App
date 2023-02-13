import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectDepositFilter } from "../../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";
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

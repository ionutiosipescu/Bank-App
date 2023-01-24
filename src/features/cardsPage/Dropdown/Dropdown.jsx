import React from "react";
import { DropdownContainer, StyledOption, StyledSelect } from "./Dropdown.style";


function SmallDropdown({selectedOption, setSelectedOption}) {
  return (
    <DropdownContainer>
      <StyledSelect
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <StyledOption value="New Account">New Account</StyledOption>
        <StyledOption value="Delete Account">Delete Account</StyledOption>
        <StyledOption value="Accounts">Accounts</StyledOption>
      </StyledSelect>
    </DropdownContainer>
  );
}

export default SmallDropdown;

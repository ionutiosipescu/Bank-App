import React from "react";
import { SearchBarContainer, SearchInput } from "./SearchBar.style";

import { BiSearch } from "react-icons/bi";

function SearchBar({ active, onClick }) {
  return (
    <SearchBarContainer active={active}>
      <BiSearch size={20} onClick={onClick} />
      <SearchInput type="text" placeholder="Search here..." active={active} />
    </SearchBarContainer>
  );
}

export default SearchBar;

import React from "react";
import { SearchBarContainer, SearchInput } from "./SearchBar.style";

import { BiSearch } from "react-icons/bi";

function SearchBar() {
  return (
    <SearchBarContainer>
      <BiSearch size={20} style={{ marginRight: "10px" }} />
      <SearchInput type="text" placeholder="Search here..." />
    </SearchBarContainer>
  );
}

export default SearchBar;

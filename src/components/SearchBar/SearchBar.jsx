import React from "react";
import { SearchBarContainer, SearchInput } from "./SearchBar.style";

import { BiSearch } from "react-icons/bi";
import { routes } from "../../utils/data/routesData";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function SearchBar({ active, onClick }) {
  const [query, setQuery] = useState("");
  const [matchingRoutes, setMatchingRoutes] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // filter routes
  const filterRoutes = () => {
    const filteredRoutes = routes.filter((route) =>
      route.path.toLowerCase().includes(query.toLowerCase())
    );
    setMatchingRoutes(filteredRoutes);
  };

  // Update input onchange
  const handleInputChange = (event) => {
    setQuery(event.target.value);
    if (event.target.value === "") {
      setMatchingRoutes([]);
    } else {
      filterRoutes();
    }
  };

  // Event when press enter navigate and clear field
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && matchingRoutes.length > 0) {
      navigate(matchingRoutes[0].path);
      setQuery("");
    }
  };

  // Event when click option navitate and clear field
  const handleOptionClick = (path) => {
    navigate(path);
    setQuery("");
  };

  return (
    <SearchBarContainer active={active}>
      <BiSearch size={20} onClick={onClick} />
      <SearchInput type="text" placeholder="Search here..." active={active} />
    </SearchBarContainer>
  );
}

export default SearchBar;

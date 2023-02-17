import React from "react";
import {
  SearchBarContainer,
  SearchInput,
  IconInputBox,
  SearchListContainer,
} from "./SearchBar.style";

import { BiSearch } from "react-icons/bi";
import { routes } from "../../utils/data/routesData";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
    const value = event.target.value;
    setQuery(value);

    if (value === "") {
      setMatchingRoutes([]);
    } else {
      const words = value.split(" ").filter((word) => word !== "");
      const filteredRoutes = routes.filter((route) => {
        return words.every((word) =>
          route.path.toLowerCase().includes(word.toLowerCase())
        );
      });
      setMatchingRoutes(filteredRoutes);
    }
  };

  // // Event when press enter navigate and clear field
  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter" && matchingRoutes.length > 0) {
  //     navigate(matchingRoutes[0].path);
  //     setQuery("");
  //   }
  // };

  // Event when click option navitate and clear field
  const handleOptionClick = (path) => {
    navigate(path);
    setQuery("");
  };

  ///////////////////////////////

  const [hasChildren, setHasChildren] = useState(false);

  useEffect(() => {
    const parent = document.getElementById("parent");
    setHasChildren(parent.hasChildNodes());
  }, [query]);

  useEffect(() => {
    console.log(query, matchingRoutes);
  }, [query]);

  return (
    <SearchBarContainer active={active}>
      <IconInputBox>
        <BiSearch size={20} onClick={onClick} />
        <SearchInput
          type="text"
          placeholder="Search here..."
          active={active}
          onChange={handleInputChange}
          value={query}
        />
      </IconInputBox>
      <SearchListContainer id="parent" list={hasChildren}>
        {query !== "" && matchingRoutes.length > 0 && (
          <ul>
            {matchingRoutes.map((route) => (
              <li key={route.path}>
                <Link
                  to={route.path}
                  className={location.pathname === route.path ? "active" : ""}
                  onClick={() => handleOptionClick(route.path)}
                >
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </SearchListContainer>
    </SearchBarContainer>
  );
}

export default SearchBar;

import React, { useEffect, useState } from "react";
// Style
import { BottomContainer, ManageAccount } from "../Cards.style";

// Components
import NewCard from "../../../features/cardsPage/CardPages/NewCard/NewCard";
import EditCard from "../../../features/cardsPage/CardPages/EditCard/EditCard";
import EditController from "../../../features/cardsPage/CardPages/EditCard/EditController/EditController";
import SmallDropdown from "../../../features/cardsPage/Dropdown/Dropdown";

// State/Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchGetCardAccountArr } from "../../../state-management/Dashboard/cards/cards.service";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import { selectCardOption } from "../../../state-management/Dashboard/cards/cards.selector";
import { setSelectedCardOption } from "../../../state-management/Dashboard/cards/cards.action";

function BottomComponent() {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

  // const [selectedOption, setSelectedOption] = useState("New Account");
  const selectedOption = useSelector(selectCardOption);
  const [selectedComponent, setSelectedComponent] = useState(<h1>Accounts</h1>);

  useEffect(() => {
    dispatch(fetchGetCardAccountArr(currentUser));
  }, []);

  useEffect(() => {
    switch (selectedOption) {
      case "New Account":
        setSelectedComponent(<NewCard />);
        break;
      case "Edit Account":
        setSelectedComponent(<EditCard />);
        break;
      default:
        setSelectedComponent(<EditCard />);
    }
  }, [selectedOption]);

  const options = [
    { value: "New Account", label: "New Account" },
    { value: "Edit Account", label: "Edit Account" },
  ];

  return (
    <BottomContainer>
      <ManageAccount>
        <SmallDropdown
          selectedOption={selectedOption}
          options={options}
          handleChange={(e) => dispatch(setSelectedCardOption(e.target.value))}
        />
        {selectedOption === "Edit Account" && <EditController />}
      </ManageAccount>
      {selectedComponent}
    </BottomContainer>
  );
}

export default BottomComponent;

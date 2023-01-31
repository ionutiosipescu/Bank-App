import React from "react";
import { EditControler } from "../EditCard.style";
import { ButtonNewCard } from "../../NewCard/NewCardPlans/NewCardPlans.style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCardEdit } from "../../../../../state-management/Dashboard/cards/cards.selector";
import { setErrorMsg } from "../../../../../state-management/Dashboard/cards/cards.action";

function EditController() {
  const dispatch = useDispatch();
  const cardEdit = useSelector(selectCardEdit);

  const handleSave = () => {
    dispatch(setErrorMsg(cardEdit));
  };

  // const handleDelete = () => {

  // }
  return (
    <EditControler>
      <ButtonNewCard
        label="Save Changes"
        size="xl"
        primary="primary"
        type="button"
        onClick={handleSave}
      />
      <ButtonNewCard
        label="Delete Account"
        size="xl"
        primary="primary"
        type="button"
        // onClick={handleDelete}
      />
    </EditControler>
  );
}

export default EditController;

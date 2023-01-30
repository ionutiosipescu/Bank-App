import React from "react";
import { EditCardWrapper, EditControler } from "./EditCard.style";
import EditCardForm from "./EditCardForm/EditCardForm";
import NewCardAvailable from "../NewCard/NewCardAvailable/NewCardAvailable";

function EditCard() {
  return (
    <EditCardWrapper>
      <EditCardForm />
      <NewCardAvailable />
    </EditCardWrapper>
  );
}

export default EditCard;

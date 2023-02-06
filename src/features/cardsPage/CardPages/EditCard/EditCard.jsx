import React from "react";
import { EditCardWrapper, EditControler } from "./EditCard.style";
import EditCardForm from "./EditCardForm/EditCardForm";
import EditCardAvailable from "./EditCardAvailable/EditCardAvailable";

function EditCard() {
  return (
    <EditCardWrapper>
      <EditCardForm />
      <EditCardAvailable />
    </EditCardWrapper>
  );
}

export default EditCard;

import React from "react";
import { EditControler } from "../EditCard.style";
import { ButtonNewCard } from "../../NewCard/NewCardPlans/NewCardPlans.style";

function EditController() {
  return (
    <EditControler>
      <ButtonNewCard
        label="Save Changes"
        size="xl"
        primary="primary"
        type="button"
      />
      <ButtonNewCard
        label="Delete Account"
        size="xl"
        primary="primary"
        type="button"
      />
    </EditControler>
  );
}

export default EditController;

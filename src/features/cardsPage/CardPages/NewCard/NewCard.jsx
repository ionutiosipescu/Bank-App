import React from "react";
import { NewCardWrapper } from "./NewCard.style";
import NewCardAvailable from "./NewCardAvailable/NewCardAvailable";
import NewCardPlans from "./NewCardPlans/NewCardPlans";

function NewCard() {
  return (
    <NewCardWrapper>
      <NewCardPlans />
      <NewCardAvailable />
    </NewCardWrapper>
  );
}

export default NewCard;

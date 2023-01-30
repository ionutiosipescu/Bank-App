import React from "react";
import { NewCardWrapper } from "./NewCard.style";
import NewCardForm from "./NewCardForm/NewCardForm";
import NewCardAvailable from "./NewCardAvailable/NewCardAvailable";

function NewCard() {
  return (
    <NewCardWrapper>
      <NewCardForm />
      <NewCardAvailable />
    </NewCardWrapper>
  );
}

export default NewCard;

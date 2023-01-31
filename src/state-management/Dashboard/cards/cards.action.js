import { CARD_TYPES } from "./cards.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";

const updateCard = (card, e) => {
  const { name, value } = e.target;
  return { ...card, [name]: value };
};
// update fields in cardDetails
export const setCard = (card, e) => {
  const cardUpdated = updateCard(card, e);
  return createAction(CARD_TYPES.SET_CARD, cardUpdated);
};

// update checkbox in cardDetails
export const setCardToggle = (card, e) => {
  const { name, checked } = e.target;
  const cardUpdated = { ...card, [name]: checked };
  return createAction(CARD_TYPES.SET_CARD, cardUpdated);
};

// update plan in cardDetails
export const setCardPlan = (card, e) => {
  const { value } = e.target;
  const cardUpdated = { ...card, typeOfPlan: value };
  return createAction(CARD_TYPES.SET_CARD, cardUpdated);
};

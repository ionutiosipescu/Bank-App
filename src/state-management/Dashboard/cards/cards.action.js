import { CARD_TYPES } from "./cards.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";

const updateCard = (card, e) => {
  const { name, value } = e.target;
  return { ...card, [name]: value };
};

export const setCard = (card, e) => {
  const cardUpdated = updateCard(card, e);
  return createAction(CARD_TYPES.SET_CARD, cardUpdated);
};

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

// Update Plan in cardEdit in Redux
export const updateCardEdit = (cardUpdated) => {
  return createAction(CARD_TYPES.SET_CARD_EDIT, cardUpdated);
};

// Update Plan in cardEdit
export const setCardPlanEdit = (cardEdit, e) => {
  const { value } = e.target;
  const cardUpdated = { ...cardEdit, typeOfPlan: value };
  return cardUpdated;
};

// async Update Plan in cardEdit
export const asyncCardPlanEdit = (cardEdit, e) => {
  return async (dispatch) => {
    const updatedCardEdit = await setCardPlanEdit(cardEdit, e);
    await dispatch(updateCardEdit(updatedCardEdit));
    await dispatch(setErrorMsg(updatedCardEdit));
  };
};

// update ErrorMsg
export const setErrorMsg = (cardEdit) => {
  let errormsg;
  if (cardEdit.typeOfPlan) {
    errormsg = "";
    console.log(cardEdit);
  } else {
    errormsg = "Chose at least one plan !";
  }
  const cardUpdated = { ...cardEdit, errorMsg: errormsg };
  return createAction(CARD_TYPES.SET_CARD_EDIT_ERROR, cardUpdated);
};

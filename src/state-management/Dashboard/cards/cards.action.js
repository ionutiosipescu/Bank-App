import { CARD_TYPES } from "./cards.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import axios from "axios";
import { findObjectByString } from "../../../utils/helpers/helperFunctions/findObject";

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
  const cardUpdated = { ...cardEdit, type_of_plan: value };
  return cardUpdated;
};

// async Update Plan in cardEdit
export const asyncCardPlanEdit = (cardEdit, e) => {
  return async (dispatch) => {
    const updatedCardEdit = await setCardPlanEdit(cardEdit, e);
    await dispatch(setCurrentCardEdit(updatedCardEdit));
    // if (cardEdit.type_of_plan !== updatedCardEdit.type_of_plan) return;
    // await dispatch(setErrorMsg(updatedCardEdit));
  };
};

export const asyncSaveChanges = (cardEdit) => {
  return async (dispatch) => {
    if (cardEdit.type_of_plan) {
      console.log("success");
    } else {
      await dispatch(setErrorMsg(cardEdit));
    }
  };
};

// update ErrorMsg
export const setErrorMsg = (cardEdit) => {
  const errormsg = "Chose at least one plan !";
  const cardUpdated = { ...cardEdit, errorMsg: errormsg };
  return createAction(CARD_TYPES.SET_CARD_EDIT_ERROR, cardUpdated);
};

// update CurrentAccount
export const setCurrentCardAccount = (card) => {
  return createAction(CARD_TYPES.SET_CARD_CURRENT, card);
};
// update CurrentAccount
export const setCurrentCardEdit = (card) => {
  return createAction(CARD_TYPES.SET_CARD_CURRENT_EDIT, card);
};

export const setCardArr = (cardArr) => {
  return createAction(CARD_TYPES.SET_CARD_ARR, cardArr);
};

// find id account ron
export const setCardId = async (currentUserData) => {
  const account = "ron";
  const stringCompare = "currency";
  const userAccountArr = currentUserData.account;
  const object = findObjectByString(account, userAccountArr, stringCompare);
  return object.id;
};

// Get Card Account Arr
export const fetchGetCardAccountArr = (currentUserData) => {
  return async (dispatch) => {
    const { id } = currentUserData;
    const { data } = await axios.get(
      `http://localhost:8080/accounts/?id=${id}`
    );
    await dispatch(setCardArr(data));
  };
};

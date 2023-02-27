import { CARD_TYPES } from "./cards.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import axios from "axios";
import { findObjectByString } from "../../../utils/helpers/helperFunctions/findObject";

// update CurrentAccount
export const setCurrentCardAccount = (card) => {
  return createAction(CARD_TYPES.SET_CARD_CURRENT, card);
};

// & NEW PAGE

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
export const setCardPlan = (card, e, cardNew) => {
  return async (dispatch) => {
    const { value } = e.target;
    const cardUpdated = { ...card, typeOfPlan: value };
    const cardNewUpdated = { ...cardNew, typeOfPlan: value };
    await dispatch(setCurrentCardNew(cardNewUpdated));
    await dispatch(setCardDetails(cardUpdated));
  };
};

export const setCardDetails = (cardUpdated) => {
  return createAction(CARD_TYPES.SET_CARD, cardUpdated);
};

// update CurrentAccount New Page
export const setCurrentCardNew = (card) => {
  return createAction(CARD_TYPES.SET_CARD_NEW, card);
};

// & EDIT PAGE

// Update Plan in cardEdit
export const setCardPlanEdit = (cardEdit, e) => {
  const { value } = e.target;
  const cardUpdated = { ...cardEdit, type_of_plan: value };
  return cardUpdated;
};

// async Update Plan in cardEdit
export const asyncCardPlanEdit = (cardEdit, e, cardArr) => {
  return async (dispatch) => {
    const updatedCardEdit = await setCardPlanEdit(cardEdit, e);
    await dispatch(setCurrentCardEdit(updatedCardEdit));
    await dispatch(asyncSaveChanges(updatedCardEdit, cardArr));
  };
};

export const asyncSaveChanges = (cardEdit, cardArr) => {
  const errormsg = "Chose at least one plan !";
  return async (dispatch) => {
    const currentEditObj = findObjectByString(
      cardEdit.currency,
      cardArr,
      "currency"
    );
    console.log(cardEdit, currentEditObj);
    if (cardEdit.type_of_plan === currentEditObj.type_of_plan) {
      await dispatch(setErrorMsg(cardEdit, errormsg));
    } else {
      await dispatch(setErrorMsg(cardEdit, ""));
      console.log("success");
    }
  };
};

// update ErrorMsg
export const setErrorMsg = (cardEdit, errormsg) => {
  const cardUpdated = { ...cardEdit, errorMsg: errormsg };
  return createAction(CARD_TYPES.SET_CARD_EDIT_ERROR, cardUpdated);
};

// update CurrentAccount Edit Page
export const setCurrentCardEdit = (card) => {
  return createAction(CARD_TYPES.SET_CARD_CURRENT_EDIT, card);
};

// Update Arr Cards from db
export const setCardArr = (cardArr) => {
  return createAction(CARD_TYPES.SET_CARD_ARR, cardArr);
};

// Add to Arr Cards
export const setAddCardArr = (cardArr, cardArrObject) => {
  const cardArrNew = [...cardArr, { ...cardArrObject }];
  return createAction(CARD_TYPES.SET_CARD_ARR, cardArrNew);
};

// find id account ron
export const setCardId = async (currentUserData) => {
  const account = "ron";
  const stringCompare = "currency";
  const userAccountArr = currentUserData.account;
  const object = findObjectByString(account, userAccountArr, stringCompare);
  return object.id;
};

// SelectedOption

export const setSelectedCardOption = (option) => {
  return createAction(CARD_TYPES.SET_CARD_OPTION, option);
};

export const resetCards = () => {
  return createAction(CARD_TYPES.RESET_CARDS);
};

export const resetCardForm = () => {
  const newCard = {
    street: "",
    postal: "",
    city: "",
    phone: "",
    acceptAddress: false,
    typeOfPlan: null,
  };
  return createAction(CARD_TYPES.SET_CARD, newCard);
};

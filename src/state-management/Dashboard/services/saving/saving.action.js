import { SAVINGS_HELPER_TYPES } from "./saving.types";
import { createAction } from "../../../../utils/helpers/reducer/reducer.utils";
import { getLocalDate } from "../../../../utils/helpers/helperFunctions/date";
import { generateRandomNumber } from "../../../../utils/helpers/helperFunctions/randomNumber";
import { findObjectByString } from "../../../../utils/helpers/helperFunctions/findObject";
import axios from "axios";

// Update Saving Action
export const setSavingAction = (saving) => {
  return createAction(SAVINGS_HELPER_TYPES.SET_SAVINGS_ACTION, saving);
};

// update Saving Obj
export const updateSavingForm = (savingData, e) => {
  const { name, value } = e.target;
  return { ...savingData, [name]: value };
};

export const setSavingForm = (savingData, e) => {
  const savingDataObj = updateSavingForm(savingData, e);
  return createAction(SAVINGS_HELPER_TYPES.SET_SAVINGS_FORM, savingDataObj);
};

// Update Saving Arr

export const setSavingArr = (obj, arr) => {
  const { transfer, details } = obj;
  const idDeposit = generateRandomNumber(3).toString();
  const newObj = {
    transfer: transfer,
    id: idDeposit,
    details: details,
  };
  // console.log(newObj);
  const newSavingArr = [...arr, { ...newObj }];
  return createAction(SAVINGS_HELPER_TYPES.SET_SAVINGS_ARR, newSavingArr);
};

export const setSavingData = async (obj) => {
  const date = getLocalDate();
  const savingData = {
    ...obj,
    date: date,
    status: "deposit",
  };
  return savingData;
};

export const setSavingsId = async (currentUserData) => {
  const account = "ron";
  const stringCompare = "currency";
  const userAccountArr = currentUserData.account;
  const object = findObjectByString(account, userAccountArr, stringCompare);
  console.log(object.id);
  return object.id;
};

// Set Arr from DB

export const setSavingArrDb = (savingArr) => {
  return createAction(SAVINGS_HELPER_TYPES.SET_SAVINGS_ARR, savingArr);
};

export const generateObjWithdraw = async (savingObj) => {
  const { id, transfer, status, date, details } = savingObj;
  const newObj = {
    id: id,
    transfer: transfer,
    status: status,
    date: date,
    details: details,
  };
  console.log(newObj);
  return newObj;
};

export const setSavingArrActions = (savingArr, savingObj) => {
  const { id } = savingObj;
  const newArr = savingArr.filter((saving) => saving.id !== id);
  return createAction(SAVINGS_HELPER_TYPES.SET_SAVINGS_ARR, newArr);
};

export const resetSaving = () => {
  return createAction(SAVINGS_HELPER_TYPES.RESET_SAVING);
};

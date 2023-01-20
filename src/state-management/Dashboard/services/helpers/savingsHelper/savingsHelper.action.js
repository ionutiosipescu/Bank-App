import { SAVINGS_HELPER_TYPES } from "./savingsHelper.types";
import { createAction } from "../../../../../utils/helpers/reducer/reducer.utils";
import { getLocalDate } from "../../../../../utils/helpers/helperFunctions/date";
import { generateRandomNumber } from "../../../../../utils/helpers/helperFunctions/randomNumber";
import axios from "axios";

// Update Saving Action
export const setSavingAction = (saving) => {
  return createAction(SAVINGS_HELPER_TYPES.SET_SAVINGS_ACTION, saving);
};

// update Saving Obj
const updateSavingForm = (savingData, e) => {
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

export const setSavingData = (obj) => {
  const date = getLocalDate();
  const savingData = {
    ...obj,
    date: date,
    status: "deposit",
  };
  return createAction(SAVINGS_HELPER_TYPES.SET_SAVINGS_DATA, savingData);
};

// Async Saving
export const fetchSavingData = (obj, arr, savingData, id) => {
  return async (dispatch) => {
    await dispatch(setSavingArr(obj, arr));
    await dispatch(setSavingData(obj));
    try {
      await axios
        .post(`http://localhost:8080/savings/new/?id=${id}`, savingData)
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };
};

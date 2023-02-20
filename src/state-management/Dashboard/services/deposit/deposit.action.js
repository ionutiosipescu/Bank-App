import { DEPOSITS_HELPER_TYPES } from "./deposit.types";
import { createAction } from "../../../../utils/helpers/reducer/reducer.utils";
import { getLocalDate } from "../../../../utils/helpers/helperFunctions/date";
import { generateRandomNumber } from "../../../../utils/helpers/helperFunctions/randomNumber";
import { LowercaseString } from "../../../../utils/helpers/helperFunctions/lowercase";
import { findObjectByString } from "../../../../utils/helpers/helperFunctions/findObject";
// Update Deposit Action

export const setDepositAction = (e) => {
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_ACTION, e.target.value);
};

// update Deposit Obj
const updateDataForm = (depositData, e) => {
  const { name, value } = e.target;
  return { ...depositData, [name]: value };
};

export const setDepositForm = (depositData, e) => {
  const depositDataObj = updateDataForm(depositData, e);
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_FORM, depositDataObj);
};

// update Deposit Account
export const setDepositAccount = (depositData, e) => {
  const { value } = e.target;
  const depositDataObj = { ...depositData, account: value };
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_FORM, depositDataObj);
};

// Update Deposit Arr

export const setDepositArr = (data) => {
  const { depositObj, depositAction, depositArr, selectedOption } = data;
  const { amount } = depositObj;
  const formattedDate = getLocalDate();
  const idDeposit = generateRandomNumber(3).toString();
  const newObj = {
    balance: amount,
    date: formattedDate,
    id: idDeposit,
    details: "",
    status: depositAction,
  };
  const newDepositArr = [...depositArr, { ...newObj }];
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_ARR, newDepositArr);
};

// Set Data for Request
export const setDepositData = async (data) => {
  const { depositObj, depositAction } = data;
  const { amount } = depositObj;
  const date = getLocalDate();
  const formatedAction = LowercaseString(depositAction);
  const depositData = {
    date: date,
    details: "",
    balance: amount,
    status: formatedAction,
  };
  return depositData;
};

// Find Account ID
export const setDepositId = async (data, currentUserData) => {
  const { account } = data;
  console.log(account);
  const userAccountArr = currentUserData.account;
  const stringCompare = "currency";
  const object = findObjectByString(account, userAccountArr, stringCompare);
  return object.id;
};

// Set Arr from DB
export const setDepositArrDb = (depositArr) => {
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_ARR, depositArr);
};

export const setDepositArrRepeat = (obj, arr) => {
  const newDepositArr = [
    ...arr,
    { ...obj, id: generateRandomNumber(3).toString() },
  ];
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_ARR, newDepositArr);
};

// format data for repeat Button
export const formatDataRepet = async (obj) => {
  const { date, balance, status } = obj;
  const depositData = {
    date: date,
    details: "",
    balance: balance,
    status: status,
  };
  return depositData;
};

// Selected Option

export const setSelectedOptionDeposit = (e, filter) => {
  const { value } = e.target;
  const newObj = { ...filter, account: value };
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_OPTION, newObj);
};

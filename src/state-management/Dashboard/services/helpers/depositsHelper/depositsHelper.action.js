import { DEPOSITS_HELPER_TYPES } from "./depositsHelper.types";
import { createAction } from "../../../../../utils/helpers/reducer/reducer.utils";
import { getLocalDate } from "../../../../../utils/helpers/helperFunctions/date";
import { generateRandomNumber } from "../../../../../utils/helpers/helperFunctions/randomNumber";
import { LowercaseString } from "../../../../../utils/helpers/helperFunctions/lowercase";
import { findObjectByString } from "../../../../../utils/helpers/helperFunctions/findObject";
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
export const setDepositAccount = (depositData, string) => {
  const depositDataObj = { ...depositData, account: string };
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_FORM, depositDataObj);
};

// Update Deposit Arr

export const setDepositArr = (obj, action, arr) => {
  const { amount } = obj;
  const formattedDate = getLocalDate();
  const idDeposit = generateRandomNumber(3).toString();
  const newObj = {
    balance: amount,
    date: formattedDate,
    id: idDeposit,
    details: "",
    status: action,
  };
  // console.log(newObj);
  const newDepositArr = [...arr, { ...newObj }];
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_ARR, newDepositArr);
};

// Set Data for Request
export const setDepositData = async (obj, action) => {
  const { amount } = obj;
  const date = getLocalDate();
  const formatedAction = LowercaseString(action);
  const depositData = {
    date: date,
    details: "",
    balance: amount,
    status: formatedAction,
  };
  console.log(depositData);
  return depositData;
};

// Find Account ID
export const setDepositId = async (obj, currentUserData) => {
  let { account } = obj;
  const userAccountArr = currentUserData.account;
  const stringCompare = "currency";
  const object = findObjectByString(account, userAccountArr, stringCompare);
  return object.id;
};

// Set Arr from DB
export const setDepositArrDb = (depositArr) => {
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_ARR, depositArr);
};

export const setFilterDepositList = (string, filter) => {
  const newObj = { ...filter, account: string };
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_FILTER, newObj);
};

// dupa ce functioneaza de mutat
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

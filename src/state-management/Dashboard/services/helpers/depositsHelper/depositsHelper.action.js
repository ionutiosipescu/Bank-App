import { DEPOSITS_HELPER_TYPES } from "./depositsHelper.types";
import { createAction } from "../../../../../utils/helpers/reducer/reducer.utils";
import { getLocalDate } from "../../../../../utils/helpers/helperFunctions/date";
import { generateRandomNumber } from "../../../../../utils/helpers/helperFunctions/randomNumber";
import { LowercaseString } from "../../../../../utils/helpers/helperFunctions/lowercase";
import { findObjectByString } from "../../../../../utils/helpers/helperFunctions/findObject";
import axios from "axios";
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
  const idDeposit = generateRandomNumber(6).toString();
  const newObj = {
    amount: amount,
    action: action,
    created_at: formattedDate,
    id: idDeposit,
    status: "Completed",
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

// Get Arr
export const getDepositArrDb = (obj, currentUserData) => {
  return async (dispatch) => {
    const id = await setDepositId(obj, currentUserData);
    const { data } = await axios.get(
      `http://localhost:8080/accounts/?id=${id}`
    );
    console.log(data);
    await dispatch(setDepositArrDb(data));
  };
};

// Set Arr from DB

export const setDepositArrDb = (depositArr) => {
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_ARR, depositArr);
};

// Async Deposit
export const fetchDepositData = (obj, action, arr, currentUserData) => {
  return async (dispatch) => {
    try {
      await dispatch(setDepositArr(obj, action, arr));
      const depositData = await setDepositData(obj, action);
      const id = await setDepositId(obj, currentUserData);
      console.log(depositData, id);
      await axios
        .post(
          `http://localhost:8080/accounts/deposit/balance/?id=${id}`,
          depositData
        )
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };
};

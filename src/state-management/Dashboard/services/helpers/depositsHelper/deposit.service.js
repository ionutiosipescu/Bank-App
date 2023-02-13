import { DEPOSITS_HELPER_TYPES } from "./depositsHelper.types";
import axios from "axios";
import {
  setDepositId,
  setDepositData,
  setDepositArrDb,
  setDepositArr,
  setDepositArrRepeat,
  formatDataRepet,
} from "./depositsHelper.action";

// Get Arr
export const getDepositArrDb = (obj, currentUserData) => {
  return async (dispatch) => {
    const id = await setDepositId(obj, currentUserData);
    const { data } = await axios.get(
      `http://localhost:8080/accounts/deposit/balance/?id=${id}`
    );
    await dispatch(setDepositArrDb(data));
  };
};

// Async Deposit POST
export const fetchDepositData = (obj, action, arr, currentUserData) => {
  return async (dispatch) => {
    try {
      const depositData = await setDepositData(obj, action);
      const id = await setDepositId(obj, currentUserData);
      await axios
        .post(
          `http://localhost:8080/accounts/deposit/balance/?id=${id}`,
          depositData
        )
        .then((res) => console.log(res));
      await dispatch(setDepositArr(obj, action, arr));
    } catch (error) {
      console.log(error);
    }
  };
};

// Async Repeat Deposit POST
export const fetchRepeatDeposit = (obj, account, arr, currentUserData) => {
  return async (dispatch) => {
    try {
      const depositData = await formatDataRepet(obj);
      const id = await setDepositId(account, currentUserData);
      console.log(id, depositData);
      await axios
        .post(
          `http://localhost:8080/accounts/deposit/balance/?id=${id}`,
          depositData
        )
        .then((res) => console.log(res));
      await dispatch(setDepositArrRepeat(obj, arr));
    } catch (error) {
      console.log(error);
    }
  };
};

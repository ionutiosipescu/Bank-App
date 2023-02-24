import axios from "axios";
import {
  setDepositId,
  setDepositData,
  setDepositArrDb,
  setDepositArr,
  setDepositArrRepeat,
  formatDataRepet,
} from "./deposit.action";
import { requests } from "../../../../utils/Requests/requests";
import { DEPOSITS_TYPES } from "./deposit.types";
import { createAction } from "../../../../utils/helpers/reducer/reducer.utils";

export const requestDepositStart = () =>
  createAction(DEPOSITS_TYPES.REQUEST_DEPOSIT_START);

export const requestDepositSuccess = () =>
  createAction(DEPOSITS_TYPES.REQUEST_DEPOSIT_SUCCESS);

export const requestDepositFailed = (error) =>
  createAction(DEPOSITS_TYPES.REQUEST_DEPOSIT_FAILED, error);

// Get Arr
export const getDepositArrDb = (obj, currentUserData) => {
  return async (dispatch) => {
    const id = await setDepositId(obj, currentUserData);
    const { data } = await axios.get(`${requests.GET_HISTORY_DEPOSIT}${id}`);
    console.log(data);
    await dispatch(setDepositArrDb(data));
  };
};

// Async Deposit POST
export const fetchDepositData = (depositDataReducer, currentUserData) => {
  return async (dispatch) => {
    const { depositObj, selectedOption } = depositDataReducer;
    try {
      await dispatch(requestDepositStart());
      const depositData = await setDepositData(depositDataReducer);
      const id = await setDepositId(depositObj, currentUserData);
      const {
        data: { balance },
      } = await axios.post(`${requests.POST_DEPOSIT}${id}`, depositData);
      await dispatch(requestDepositSuccess());
      if (depositObj?.account === selectedOption?.account) {
        await dispatch(setDepositArr(depositDataReducer, balance));
      } else {
        return;
      }
    } catch (err) {
      if (!err) return;
      const errMsg = err?.response?.data?.message;
      const errServer =
        "Server is currently unavailable please try again later";
      if (errMsg) {
        dispatch(requestDepositFailed(errMsg));
      } else {
        dispatch(requestDepositFailed(errServer));
      }
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
        .post(`${requests.POST_DEPOSIT}${id}`, depositData)
        .then((res) => console.log(res));
      await dispatch(setDepositArrRepeat(obj, arr));
    } catch (error) {
      console.log(error);
    }
  };
};

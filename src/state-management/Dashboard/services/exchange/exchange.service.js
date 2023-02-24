import axios from "axios";
import {
  setExchangeId,
  setExchangeArrDb,
  setExchangeArr,
  setExchangeData,
  setExchangeArrRepeat,
  setExchangeDataRepeat,
  setExchangeIdRepeat,
} from "./exchange.action";
import { requests } from "../../../../utils/Requests/requests";
import { EXCHANGE_TYPES } from "./exchange.types";
import { createAction } from "../../../../utils/helpers/reducer/reducer.utils";

export const requestExchangeStart = () =>
  createAction(EXCHANGE_TYPES.REQUEST_EXCHANGE_START);

export const requestExchangeSuccess = () =>
  createAction(EXCHANGE_TYPES.REQUEST_EXCHANGE_SUCCESS);

export const requestExchangeFailed = (error) =>
  createAction(EXCHANGE_TYPES.REQUEST_EXCHANGE_FAILED, error);

// Get Arr
export const getExchangeArr = (obj, currentUserData) => {
  return async (dispatch) => {
    const id = await setExchangeId(obj, currentUserData);
    const { data } = await axios.get(`${requests.GET_HISTORY_EXCHANGE}${id}`);
    console.log(data);
    await dispatch(setExchangeArrDb(data));
  };
};

// POST - create new exchange
export const fetchExchangeData = (
  obj,
  arr,
  currentUserData,
  selectedOptionExchange
) => {
  return async (dispatch) => {
    const { amount } = obj;
    const errMsg = "Invalid amount for exchange";
    try {
      console.log(amount);
      if (!amount) {
        dispatch(requestExchangeFailed(errMsg));
      } else {
        await dispatch(requestExchangeStart());
        const exchangeData = await setExchangeData(obj);
        const id = await setExchangeId(obj, currentUserData);
        await axios
          .post(`${requests.POST_EXCHANGE}${id}`, exchangeData)
          .then((res) => console.log(res));
        await dispatch(requestExchangeSuccess());
        await dispatch(setExchangeArr(obj, arr, selectedOptionExchange));
      }
    } catch (err) {
      if (!err) return;
      const errMsg = err?.response?.data?.message;
      const errServer =
        "Server is currently unavailable please try again later";
      if (errMsg) {
        dispatch(requestExchangeFailed(errMsg));
      } else {
        dispatch(requestExchangeFailed(errServer));
      }
    }
  };
};

// POST - repeat exchange
export const fetchExchangeRepeat = (obj, arr, currentUserData) => {
  return async (dispatch) => {
    // const { exchange } = obj;
    // const errMsg = "Add a value";
    // console.log(obj, arr, currentUserData);
    // console.log(exchange);
    try {
      // if (!exchange) {
      // dispatch(requestExchangeFailed(errMsg));
      // } else {
      const exchangeData = await setExchangeDataRepeat(obj);
      const id = await setExchangeIdRepeat(obj, currentUserData);
      await axios
        .post(`${requests.POST_EXCHANGE}${id}`, exchangeData)
        .then((res) => console.log(res));
      await dispatch(setExchangeArrRepeat(obj, arr));
      // }
    } catch (error) {
      console.log(error);
    }
  };
};

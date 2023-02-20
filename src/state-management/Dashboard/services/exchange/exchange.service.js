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

// Get Arr
export const getExchangeArr = (obj, currentUserData) => {
  return async (dispatch) => {
    const id = await setExchangeId(obj, currentUserData);
    const { data } = await axios.get(`${requests.GET_HISTORY_EXCHANGE}${id}`);
    console.log(data);
    await dispatch(setExchangeArrDb(data));
  };
};

export const fetchExchangeData = (obj, arr, currentUserData) => {
  return async (dispatch) => {
    console.log(obj, arr, currentUserData);
    await dispatch(setExchangeArr(obj, arr));
    try {
      const exchangeData = await setExchangeData(obj);
      const id = await setExchangeId(obj, currentUserData);
      await axios
        .post(`${requests.POST_EXCHANGE}${id}`, exchangeData)
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchExchangeRepeat = (obj, arr, currentUserData) => {
  return async (dispatch) => {
    await dispatch(setExchangeArrRepeat(obj, arr));
    try {
      const exchangeData = await setExchangeDataRepeat(obj);
      const id = await setExchangeIdRepeat(obj, currentUserData);
      await axios
        .post(`${requests.POST_EXCHANGE}${id}`, exchangeData)
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };
};

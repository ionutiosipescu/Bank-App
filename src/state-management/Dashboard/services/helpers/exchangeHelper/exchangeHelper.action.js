import { createAction } from "../../../../../utils/helpers/reducer/reducer.utils";
import { getLocalDate } from "../../../../../utils/helpers/helperFunctions/date";
import { EXCHANGE_HELPER_TYPES } from "./excahngeHelper.types";
import { findObjectByString } from "../../../../../utils/helpers/helperFunctions/findObject";
import axios from "axios";

export const updateExhangeAmount = (exchangeData, e) => {
  const { name, value } = e.target;
  return { ...exchangeData, [name]: value };
};

export const setExchangeAmount = (exchangeData, e) => {
  const exchangeAmount = updateExhangeAmount(exchangeData, e);
  return createAction(EXCHANGE_HELPER_TYPES.SET_EXCHANGE_DATA, exchangeAmount);
};

export const setExchangeAmountTo = (exchangeData, amountTo) => {
  const updateExchangeAmount = { ...exchangeData, amountToObj: amountTo };
  return createAction(
    EXCHANGE_HELPER_TYPES.SET_EXCHANGE_DATA,
    updateExchangeAmount
  );
};

const setExchangeData = (obj) => {
  const { amount } = obj;
  const date = getLocalDate();
  const cleanExchangeData = {
    exchange: Number(amount),
    details: "",
    date: date,
  };
  return cleanExchangeData;
};

export const setExchangeId = (obj, currentUserData) => {
  const { currency } = obj;
  const stringCompare = "currency";
  const userAccountArr = currentUserData.account;
  const object = findObjectByString(currency, userAccountArr, stringCompare);
  return object.id;
};

// Get Arr
export const getExchangeArr = (obj, currentUserData) => {
  return async (dispatch) => {
    const id = await setExchangeId(obj, currentUserData);
    const { data } = await axios.get(
      `http://localhost:8080/exchanges/?id=${id}`
    );
    console.log(data);
    await dispatch(setExchangeArrDb(data));
  };
};

// Set Arr from DB

export const setExchangeArrDb = (exchangeArr) => {
  return createAction(EXCHANGE_HELPER_TYPES.SET_EXCHANGE_ARR, exchangeArr);
};

export const setExchangeArr = (obj, arr) => {
  const { amount, currency } = obj;
  const string = currency === "ron" ? `RON \u{2194} EURO` : `EURO \u{2194} RON`;
  const objArr = {
    detail: string,
    rate: "5.23",
    amount: amount,
    date: getLocalDate(),
  };
  const newExchangeArr = [...arr, { ...objArr }];
  return createAction(EXCHANGE_HELPER_TYPES.SET_EXCHANGE_ARR, newExchangeArr);
};

export const fetchExchangeData = (obj, arr, currentUserData) => {
  return async (dispatch) => {
    await dispatch(setExchangeArr(obj, arr));
    try {
      const exchangeData = await setExchangeData(obj);
      const id = await setExchangeId(obj, currentUserData);
      await axios
        .post(`http://localhost:8080/exchanges/exchange?id=${id}`, exchangeData)
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };
};

import { createAction } from "../../../../../utils/helpers/reducer/reducer.utils";
import { getLocalDate } from "../../../../../utils/helpers/helperFunctions/date";
import { EXCHANGE_HELPER_TYPES } from "./excahngeHelper.types";
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
  let id;
  switch (currency) {
    case "ron":
      return currentUserData.account[1].id.toString();
    case "eur":
      return currentUserData.account[0].id.toString();
    default:
      return id;
  }
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
      console.log(exchangeData, id);
      await axios
        .post(`http://localhost:8080/exchanges/exchange?id=${id}`, exchangeData)
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };
};

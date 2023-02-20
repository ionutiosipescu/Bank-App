import { createAction } from "../../../../utils/helpers/reducer/reducer.utils";
import { getLocalDate } from "../../../../utils/helpers/helperFunctions/date";
import { EXCHANGE_HELPER_TYPES } from "./exchange.types";
import { findObjectByString } from "../../../../utils/helpers/helperFunctions/findObject";
import axios from "axios";
import { generateRandomNumber } from "../../../../utils/helpers/helperFunctions/randomNumber";

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

export const setExchangeData = async (obj) => {
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
  const { account } = obj;
  const stringCompare = "currency";
  const userAccountArr = currentUserData.account;
  const object = findObjectByString(account, userAccountArr, stringCompare);
  return object.id;
};

// Set Arr from DB

export const setExchangeArrDb = (exchangeArr) => {
  return createAction(EXCHANGE_HELPER_TYPES.SET_EXCHANGE_ARR, exchangeArr);
};

export const setExchangeArr = (obj, arr) => {
  const { amount, currency } = obj;
  const string = currency === "ron" ? `RonToEuro` : `EuroToRon`;
  console.log(string);
  const objArr = {
    id: generateRandomNumber(3).toString(),
    type_exchange: string,
    exchange: amount,
    date: getLocalDate(),
    details: "",
  };
  const newExchangeArr = [...arr, { ...objArr }];
  return createAction(EXCHANGE_HELPER_TYPES.SET_EXCHANGE_ARR, newExchangeArr);
};

// REPEAT

// refactor in future DRY principale
export const setExchangeArrRepeat = (obj, arr) => {
  const newExchangeArr = [...arr, { ...obj }];
  return createAction(EXCHANGE_HELPER_TYPES.SET_EXCHANGE_ARR, newExchangeArr);
};

export const setExchangeDataRepeat = async (obj) => {
  const { exchange } = obj;
  const date = getLocalDate();
  const cleanExchangeData = {
    exchange: Number(exchange),
    details: "",
    date: date,
  };
  return cleanExchangeData;
};

export const setExchangeIdRepeat = (obj, currentUserData) => {
  const { type_exchange } = obj;
  const currency = type_exchange === "RonToEuro" ? "ron" : "euro";
  const stringCompare = "currency";
  const userAccountArr = currentUserData.account;
  const object = findObjectByString(currency, userAccountArr, stringCompare);
  return object.id;
};

// Selected Option

export const setSelectedOptionExchange = (e, filter) => {
  const { value } = e.target;
  const newObj = { ...filter, account: value };
  return createAction(EXCHANGE_HELPER_TYPES.SET_EXCHANGE_OPTION, newObj);
};

export const resetExchange = () => {
  return createAction(EXCHANGE_HELPER_TYPES.RESET_EXCHANGE);
};

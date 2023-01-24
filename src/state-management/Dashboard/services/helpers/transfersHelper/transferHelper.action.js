import { TRANSFER_HELPER_TYPES } from "./transferHelper.types";
import { createAction } from "../../../../../utils/helpers/reducer/reducer.utils";
import { getLocalDate } from "../../../../../utils/helpers/helperFunctions/date";
import { findObjectByString } from "../../../../../utils/helpers/helperFunctions/findObject";
import axios from "axios";

// Update Object
export const setAddTransferAccount = (account) => {
  return createAction(TRANSFER_HELPER_TYPES.SET_ADD_TRANSFER, account);
};

export const setTransformAccount = (transferData, currency) => {
  const updateTransferAccount = { ...transferData, account: currency };
  return createAction(
    TRANSFER_HELPER_TYPES.SET_TRANSFER_FORM,
    updateTransferAccount
  );
};
// Update Form with Account Object
export const setChangeAccountForm = (account) => {
  const { email, owner } = account;
  const updateObjectForm = {
    email: email,
    name: owner,
    details: "",
    transfer: "",
  };
  return createAction(
    TRANSFER_HELPER_TYPES.SET_TRANSFER_FORM,
    updateObjectForm
  );
};

// update Transfer Form
const updateDataForm = (transferData, e) => {
  const { name, value } = e.target;
  return { ...transferData, [name]: value };
};

export const setTransferForm = (transferData, e) => {
  const formDataObj = updateDataForm(transferData, e);
  return createAction(TRANSFER_HELPER_TYPES.SET_TRANSFER_FORM, formDataObj);
};

// Async Transfer
export const fetchTransferAccount = (account) => {
  return async (dispatch) => {
    try {
      await dispatch(setAddTransferAccount(account));
      await dispatch(setChangeAccountForm(account));
    } catch (error) {
      console.log(error);
    }
  };
};

export const setTransferData = async (transferData) => {
  const { transfer, details } = transferData;
  const transferDataRequest = {
    transfer: transfer,
    details: details,
    date: getLocalDate(),
  };
  console.log(transferDataRequest);
  return transferDataRequest;
};

// Find Account ID
export const setExchangeId = async (obj, currentUserData) => {
  let { account } = obj;
  const userAccountArr = currentUserData.account;
  const stringCompare = "currency";
  const object = findObjectByString(account, userAccountArr, stringCompare);
  return object.id;
};

// Async Transfer Data
export const fetchTransferData = (transferData, currentUserData) => {
  return async (dispatch) => {
    try {
      const transferDataRequest = await setTransferData(transferData);
      const id = await setExchangeId(transferData, currentUserData);
      //     await axios
      // .post(`http://localhost:8080/transfers/transfer/${id}`, transferDataRequest)
      // .then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  };
};

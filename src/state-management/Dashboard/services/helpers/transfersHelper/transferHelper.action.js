import { TRANSFER_HELPER_TYPES } from "./transferHelper.types";
import { createAction } from "../../../../../utils/helpers/reducer/reducer.utils";
import { getLocalDate } from "../../../../../utils/helpers/helperFunctions/date";
import { findObjectByString } from "../../../../../utils/helpers/helperFunctions/findObject";
import { generateRandomNumber } from "../../../../../utils/helpers/helperFunctions/randomNumber";
import axios from "axios";

// Update Transfer Form
const updateDataForm = (transferData, e) => {
  const { name, value } = e.target;
  return { ...transferData, [name]: value };
};

export const setTransferForm = (transferData, e) => {
  const formDataObj = updateDataForm(transferData, e);
  return createAction(TRANSFER_HELPER_TYPES.SET_TRANSFER_FORM, formDataObj);
};

// Update Account Currency
export const setTransformAccount = (transferData, currency) => {
  const updateTransferAccount = { ...transferData, account: currency };
  return createAction(
    TRANSFER_HELPER_TYPES.SET_TRANSFER_FORM,
    updateTransferAccount
  );
};

// Update Transfer Array
export const setTransferArr = (transferData, accountSelected, arr) => {
  const { image } = accountSelected;
  const { name, transfer, account } = transferData;
  const transferHistory = {
    reciever: name,
    amount: transfer,
    account: account,
    id: generateRandomNumber(6).toString(),
    date: getLocalDate(),
    status: "Completed",
    image: image,
  };
  const newTransferArr = [...arr, { ...transferHistory }];
  return createAction(TRANSFER_HELPER_TYPES.SET_TRANSFER_ARR, newTransferArr);
};

// Update selected Account
export const setAddTransferAccount = (account) => {
  console.log(account);
  return createAction(TRANSFER_HELPER_TYPES.SET_ADD_TRANSFER, account);
};

// Update Inputs With Selected Account
export const setChangeAccountForm = (account) => {
  const { email, owner } = account;
  const updateObjectForm = {
    email: email,
    name: owner,
    details: "",
    transfer: "",
    account: "ron",
  };
  return createAction(
    TRANSFER_HELPER_TYPES.SET_TRANSFER_FORM,
    updateObjectForm
  );
};

// Async Selecting Account and Update the Inputs
export const fetchTransferAccount = (account) => {
  console.log(account);
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
  console.log(transferData);
  const transferDataRequest = {
    transfer: transfer,
    details: details,
    date: getLocalDate(),
  };
  console.log(transferDataRequest);
  return transferDataRequest;
};

// Find Account ID
export const setTransferId = async (obj, currentUserData) => {
  let { account } = obj;
  console.log(account);
  const userAccountArr = currentUserData.account;
  const stringCompare = "currency";
  const object = findObjectByString(account, userAccountArr, stringCompare);
  console.log(object.id);
  return object.id;
};

// Get Arr
export const getTransferArr = (obj, currentUserData) => {
  return async (dispatch) => {
    const id = await setTransferId(obj, currentUserData);
    await axios
      .get(`http://localhost:8080/transfers/?id=${id}`)
      .then((res) => console.log(res));

    // await dispatch(setExchangeArrDb(data));
  };
};

// Set Arr from DB

// export const setTransferArrDb = (transferArr) => {
//   return createAction(TRANSFER_HELPER_TYPES.SET_TRANSFER_ARR, transferArr);
// };

// Async Transfer Data
export const fetchTransferData = (
  transferData,
  currentUserData,
  selectedAccount,
  arr
) => {
  return async (dispatch) => {
    await dispatch(setTransferArr(transferData, selectedAccount, arr));
    try {
      const transferDataRequest = await setTransferData(transferData);
      const id = await setTransferId(transferData, currentUserData);
      await axios
        .post(
          `http://localhost:8080/transfers/transfer/?id=${id}&email=${transferData.email}`,
          transferDataRequest
        )
        .then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  };
};

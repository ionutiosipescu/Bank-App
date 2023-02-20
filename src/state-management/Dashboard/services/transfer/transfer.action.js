import { TRANSFER_HELPER_TYPES } from "./transfer.types";
import { createAction } from "../../../../utils/helpers/reducer/reducer.utils";
import { getLocalDate } from "../../../../utils/helpers/helperFunctions/date";
import { findObjectByString } from "../../../../utils/helpers/helperFunctions/findObject";
import { generateRandomNumber } from "../../../../utils/helpers/helperFunctions/randomNumber";
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
  const { account } = obj;
  const userAccountArr = currentUserData.account;
  const stringCompare = "currency";
  console.log(account, userAccountArr, stringCompare);
  const object = findObjectByString(account, userAccountArr, stringCompare);
  return object.id;
};

// Get Arr
export const getTransferArr = (obj, currentUserData) => {
  return async (dispatch) => {
    const id = await setTransferId(obj, currentUserData);
    console.log(id);
    // if (!id) return;
    const { data } = await axios.get(
      `http://localhost:8080/transfers/?id=${id}`
    );
    console.log(data);
    await dispatch(setTransferArrDb(data));
  };
};

// Set Arr from DB

export const setTransferArrDb = (transferArr) => {
  return createAction(TRANSFER_HELPER_TYPES.SET_TRANSFER_ARR, transferArr);
};

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
      console.log(id, transferDataRequest);
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

// // Async Repeat Transfer Data
// ca sa fac un repeat din cate am inteles trebuie sa :
// ma autentific ca sa obtin un obiect cu username si parola
// sa le folosesc in primul request http://localhost:8080/bank/auth/signin
// dupa care primes token si il trimit la http://localhost:8080/user/${id} ca sa obtin emailul recieverului
// si in felul asta pot sa repet un transfer care va fi necesar un al 3-lea request dupa ce obtin emailul, trebuie sa folosesc id si cateva date din acel transfer
// aceasi problema va si si la details
// export const fetchRepeatTransferData = (repeatObj) => {
//   return async (dispatch) => {
//     try {
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

// Set Detail Transfer

export const setDetailTransfer = (obj) => {
  return createAction(TRANSFER_HELPER_TYPES.SET_DETAIL_TRANSFER, obj);
};

// Selected Option

export const setSelectedOptionTransfer = (e, filter) => {
  const { value } = e.target;
  const newObj = { ...filter, account: value };
  return createAction(TRANSFER_HELPER_TYPES.SET_TRANSFER_OPTION, newObj);
};

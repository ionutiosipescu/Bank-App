import { TRANSFER_HELPER_TYPES } from "./transferHelper.types";
import { createAction } from "../../../../../utils/helpers/reducer/reducer.utils";

// Update Object
export const setAddTransferAccount = (account) => {
  return createAction(TRANSFER_HELPER_TYPES.SET_ADD_TRANSFER, account);
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

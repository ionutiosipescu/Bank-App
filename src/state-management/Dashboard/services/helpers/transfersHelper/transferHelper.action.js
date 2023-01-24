import { TRANSFER_HELPER_TYPES } from "./transferHelper.types";
import { createAction } from "../../../../../utils/helpers/reducer/reducer.utils";

// Update Object
export const setAddTransferAccount = (account) => {
  return createAction(TRANSFER_HELPER_TYPES.SET_ADD_TRANSFER, account);
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

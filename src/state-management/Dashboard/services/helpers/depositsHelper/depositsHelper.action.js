import { DEPOSITS_HELPER_TYPES } from "./depositsHelper.types";
import { createAction } from "../../../../../utils/helpers/reducer/reducer.utils";

export const setDepositAction = (deposit) => {
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_ACTION, deposit);
};

const updateDataForm = (depositData, e) => {
  const { name, value } = e.target;
  return { ...depositData, [name]: value };
};

export const setDepositForm = (depositData, e) => {
  const depositDataObj = updateDataForm(depositData, e);
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_FORM, depositDataObj);
};

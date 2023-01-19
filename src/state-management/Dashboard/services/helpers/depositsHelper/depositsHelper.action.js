import { DEPOSITS_HELPER_TYPES } from "./depositsHelper.types";
import { createAction } from "../../../../../utils/helpers/reducer/reducer.utils";
import { getLocalDate } from "../../../../../utils/helpers/helperFunctions/date";
import { generateRandomNumber } from "../../../../../utils/helpers/helperFunctions/randomNumber";

// Update Deposit Action
export const setDepositAction = (deposit) => {
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_ACTION, deposit);
};

// update Deposit Obj
const updateDataForm = (depositData, e) => {
  const { name, value } = e.target;
  return { ...depositData, [name]: value };
};

export const setDepositForm = (depositData, e) => {
  const depositDataObj = updateDataForm(depositData, e);
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_FORM, depositDataObj);
};

// Update Deposit Arr

export const setDepositArr = (action, obj, arr) => {
  const { amount } = obj;
  const formattedDate = getLocalDate();
  const idDeposit = generateRandomNumber(6).toString();
  const newObj = {
    amount: amount,
    action: action,
    created_at: formattedDate,
    id: idDeposit,
    status: "Completed",
  };
  // console.log(newObj);
  const newDepositArr = [...arr, { ...newObj }];
  return createAction(DEPOSITS_HELPER_TYPES.SET_DEPOSIT_ARR, newDepositArr);
};

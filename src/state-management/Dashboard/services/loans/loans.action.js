import { createAction } from "../../../../utils/helpers/reducer/reducer.utils";
import { LOANS_DATA_TYPES } from "./loans.types";

// Update Loans Form Data
const updateLoansData = (loansData, e) => {
  const { name, value } = e.target;
  return { ...loansData, [name]: value };
};

export const setLoansData = (loansData, e) => {
  const loansDataUpdated = updateLoansData(loansData, e);
  return createAction(LOANS_DATA_TYPES.SET_LOANS, loansDataUpdated);
};

// Update Loans Arr
export const setLoansArr = (loanObject, arr) => {
  const newLoansArr = [...arr, { ...loanObject }];
  return createAction(LOANS_DATA_TYPES.SET_LOANS_ARR, newLoansArr);
};

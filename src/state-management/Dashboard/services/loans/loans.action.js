import { createAction } from "../../../../utils/helpers/reducer/reducer.utils";
import { LOANS_DATA_TYPES } from "./loans.types";

const updateLoansData = (loansData, e) => {
  const { name, value } = e.target;
  return { ...loansData, [name]: value };
};

export const setLoansData = (loansData, e) => {
  const loansDataUpdated = updateLoansData(loansData, e);
  return createAction(LOANS_DATA_TYPES.SET_LOANS, loansDataUpdated);
};

import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { LOANS_DATA_TYPES } from "./loans.types";

const INITIAL_STATE = {
  loansData: {
    serie: "",
    loan_amount: "",
    income: "",
    cnp: "",
    employee_status: "",
    loan_purpose: "",
    loan_years: "",
    marital_status: "",
  },
  loansArr: [],
  loansHistory: [],
};

export const loansDataReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOANS_DATA_TYPES.SET_LOANS:
      return { ...state, loansData: { ...payload } };
    case LOANS_DATA_TYPES.SET_LOANS_ARR:
      return { ...state, loansArr: [...payload] };
    case LOANS_DATA_TYPES.SET_LOANS_ARR_HISTORY:
      return { ...state, loansHistory: [...payload] };
    default:
      return state;
  }
};

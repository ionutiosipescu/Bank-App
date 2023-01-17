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
};

export const loansDataReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOANS_DATA_TYPES.SET_LOANS:
      return { ...state, loansData: { ...payload } };
    default:
      return state;
  }
};

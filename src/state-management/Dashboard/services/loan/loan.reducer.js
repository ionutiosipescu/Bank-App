import { LOANS_DATA_TYPES } from "./loan.types";

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
  loanCheckData: {},
  loansArr: [],
  loansHistory: [],
  loanStatus: "pending",
  isSubmiting: false,
  showMessage: false,
  errorMsg: "",
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
    case LOANS_DATA_TYPES.SET_LOANS_CHECK_DATA:
      return { ...state, loanCheckData: { ...payload } };
    case LOANS_DATA_TYPES.SET_LOAN_STATUS:
      return { ...state, loanStatus: payload };
    case LOANS_DATA_TYPES.REQUEST_LOANS_START:
      return { ...state, isSubmiting: true };
    case LOANS_DATA_TYPES.REQUEST_LOANS_SUCCESS:
      return { ...state, isSubmiting: false, showMessage: true, errorMsg: "" };
    case LOANS_DATA_TYPES.REQUEST_LOANS_FAILED:
      return {
        ...state,
        isSubmiting: false,
        showMessage: true,
        errorMsg: payload,
      };
    case LOANS_DATA_TYPES.RESET_SHOW_MSG:
      return {
        ...state,
        showMessage: false,
        errorMsg: "",
      };
    case LOANS_DATA_TYPES.RESET_LOANS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

import { DEPOSITS_TYPES } from "./deposit.types";

const INITIAL_STATE = {
  depositAction: "Deposit",
  depositObj: {
    card_number: "",
    card_name: "",
    exp_date: "",
    cvc: "",
    amount: "",
    account: "ron",
  },
  depositArr: [],
  selectedOption: {
    account: "ron",
  },
  isSubmiting: false,
  showMessage: false,
  errorMsg: "",
};

export const depositReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case DEPOSITS_TYPES.SET_DEPOSIT_ACTION:
      return { ...state, depositAction: payload };
    case DEPOSITS_TYPES.SET_DEPOSIT_FORM:
      return { ...state, depositObj: { ...payload } };
    case DEPOSITS_TYPES.SET_DEPOSIT_ARR:
      return { ...state, depositArr: [...payload] };
    case DEPOSITS_TYPES.SET_DEPOSIT_OPTION:
      return { ...state, selectedOption: { ...payload } };
    case DEPOSITS_TYPES.RESET_DEPOSIT:
      return INITIAL_STATE;
    case DEPOSITS_TYPES.REQUEST_DEPOSIT_START:
      return { ...state, isSubmiting: true };
    case DEPOSITS_TYPES.REQUEST_DEPOSIT_SUCCESS:
      return { ...state, isSubmiting: false, showMessage: true, errorMsg: "" };
    case DEPOSITS_TYPES.REQUEST_DEPOSIT_FAILED:
      return {
        ...state,
        isSubmiting: false,
        showMessage: true,
        errorMsg: payload,
      };
    case DEPOSITS_TYPES.RESET_SHOW_MSG:
      return {
        ...state,
        showMessage: false,
        errorMsg: "",
      };
    default:
      return state;
  }
};

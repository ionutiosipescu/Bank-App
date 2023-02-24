import { EXCHANGE_TYPES } from "./exchange.types";

const INITIAL_STATE = {
  exchangeData: {
    amount: "",
    currency: "ron",
    amountToObj: "",
  },
  exchangeArr: [],
  selectedOption: {
    currency: "ron",
  },
  isSubmiting: false,
  showMessage: false,
  errorMsg: "",
};

export const exchangeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case EXCHANGE_TYPES.SET_EXCHANGE_DATA:
      return { ...state, exchangeData: { ...payload } };
    case EXCHANGE_TYPES.SET_EXCHANGE_ARR:
      return { ...state, exchangeArr: [...payload] };
    case EXCHANGE_TYPES.SET_EXCHANGE_OPTION:
      return { ...state, selectedOption: { ...payload } };
    case EXCHANGE_TYPES.RESET_EXCHANGE:
      return INITIAL_STATE;
    case EXCHANGE_TYPES.REQUEST_EXCHANGE_START:
      return { ...state, isSubmiting: true };
    case EXCHANGE_TYPES.REQUEST_EXCHANGE_SUCCESS:
      return { ...state, isSubmiting: false, showMessage: true, errorMsg: "" };
    case EXCHANGE_TYPES.REQUEST_EXCHANGE_FAILED:
      return {
        ...state,
        isSubmiting: false,
        showMessage: true,
        errorMsg: payload,
      };
    case EXCHANGE_TYPES.RESET_SHOW_MSG:
      return {
        ...state,
        showMessage: false,
        errorMsg: "",
      };
    default:
      return state;
  }
};

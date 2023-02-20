import { EXCHANGE_HELPER_TYPES } from "./exchange.types";

const INITIAL_STATE = {
  exchangeData: {
    amount: "",
    currency: "ron",
    amountToObj: "",
  },
  exchangeArr: [],
  selectedOption: {
    account: "ron",
  },
};

export const exchangeHelperReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case EXCHANGE_HELPER_TYPES.SET_EXCHANGE_DATA:
      return { ...state, exchangeData: { ...payload } };
    case EXCHANGE_HELPER_TYPES.SET_EXCHANGE_ARR:
      return { ...state, exchangeArr: [...payload] };
    case EXCHANGE_HELPER_TYPES.SET_EXCHANGE_OPTION:
      return { ...state, selectedOption: { ...payload } };
    case EXCHANGE_HELPER_TYPES.RESET_EXCHANGE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

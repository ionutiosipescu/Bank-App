import { EXCHANGE_HELPER_TYPES } from "./excahngeHelper.types";

const INITIAL_STATE = {
  exchangeData: {
    amount: "",
    currency: "ron",
  },
  exchangeArr: [],
};

export const exchangeHelperReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case EXCHANGE_HELPER_TYPES.SET_EXCHANGE_DATA:
      return { ...state, exchangeData: { ...payload } };
    case EXCHANGE_HELPER_TYPES.SET_EXCHANGE_ARR:
      return { ...state, exchangeArr: [...payload] };
    default:
      return state;
  }
};

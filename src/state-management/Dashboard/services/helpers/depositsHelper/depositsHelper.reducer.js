import { DEPOSITS_HELPER_TYPES } from "./depositsHelper.types";

const INITIAL_STATE = {
  depositAction: "",
  depositObj: {
    card_number: "",
    card_name: "",
    exp_date: "",
    cvc: "",
    amount: "",
  },
  depositArr: [],
};

export const depositHelperReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case DEPOSITS_HELPER_TYPES.SET_DEPOSIT_ACTION:
      return { ...state, depositAction: payload };
    case DEPOSITS_HELPER_TYPES.SET_DEPOSIT_FORM:
      return { ...state, depositObj: { ...payload } };
    case DEPOSITS_HELPER_TYPES.SET_DEPOSIT_ARR:
      return { ...state, depositArr: [...payload] };
    default:
      return state;
  }
};

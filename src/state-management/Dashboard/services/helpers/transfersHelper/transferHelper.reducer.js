import { TRANSFER_HELPER_TYPES } from "./transferHelper.types";

const INITIAL_STATE = {
  transferObj: {},
  transferForm: {
    email: "",
    name: "",
    transfer: "",
    details: "",
    account: "ron",
  },
};

export const transferHelperReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TRANSFER_HELPER_TYPES.SET_ADD_TRANSFER:
      return { ...state, transferObj: { ...payload } };
    case TRANSFER_HELPER_TYPES.SET_TRANSFER_FORM:
      return { ...state, transferForm: { ...payload } };
    default:
      return state;
  }
};

import { TRANSFER_HELPER_TYPES } from "./transferHelper.types";

const INITIAL_STATE = {
  transferObj: {},
};

export const transferHelperReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TRANSFER_HELPER_TYPES.SET_ADD_TRANSFER:
      return { ...state, transferObj: { ...payload } };
    default:
      return state;
  }
};

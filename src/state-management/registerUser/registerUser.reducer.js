import { REGISTER_ACTION_TYPES } from "./registerUser.types";

const INITIAL_STATE = {
  userDetail: {},
  account: [],
};

export const registerReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_ACTION_TYPES.SET_REGISTER_ADITIONALS:
      return { ...state, ...payload };
    case REGISTER_ACTION_TYPES.SET_REGISTER_USER:
      return { ...state, userDetail: { ...payload } };
    case REGISTER_ACTION_TYPES.SET_REGISTER_PLAN_ADD:
      return { ...state, account: [...payload] };
    default:
      return state;
  }
};

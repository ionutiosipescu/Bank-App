import { REGISTER_ACTION_TYPES } from "./registerUser.types";

const INITIAL_STATE = {
  userProfile: {
    firstname: "",
    lastname: "",
    country: "",
    address: "",
    age: "",
    gender: "",
    email: "",
    displayName: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    createdAt: "",
  },
  userPlan: [],
};

export const registerReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_ACTION_TYPES.SET_REGISTER_USER:
      return { ...state, userProfile: { ...payload } };
    case REGISTER_ACTION_TYPES.SET_REGISTER_PLAN_ADD:
      return { ...state, userPlan: [...payload] };
    case REGISTER_ACTION_TYPES.SET_REGISTER_PLAN_REMOVE:
      return { ...state, userPlan: [...payload] };
    default:
      return state;
  }
};

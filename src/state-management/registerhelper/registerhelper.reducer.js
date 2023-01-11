import { REGISTER_HELPER_TYPES } from "./registerhelper.types";

const INITIAL_STATE = {
  userProfile: {
    firstname: "",
    lastname: "",
    country: "",
    address: "",
    date: "",
    gender: "",
    email: "",
    displayName: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  },
  planData: [
    {
      typeOfPlan: "",
      currency: "ron",
      namePlan: "Ron",
      currentBallance: "",
    },
  ],
  step: 0,
};

export const registerHelperReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_HELPER_TYPES.SET_STEP:
      return { ...state, step: payload };
    case REGISTER_HELPER_TYPES.SET_PLAN_DATA:
      return { ...state, planData: [...payload] };
    case REGISTER_HELPER_TYPES.SET_USER_DATA:
      return { ...state, userProfile: { ...payload } };
    default:
      return state;
  }
};

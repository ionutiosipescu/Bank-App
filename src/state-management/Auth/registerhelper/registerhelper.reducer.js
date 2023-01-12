import { REGISTER_HELPER_TYPES } from "./registerhelper.types";
import { REGISTER_ACTION_TYPES } from "../registerUser/registerUser.types";

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
  isLoading: false,
  error: "",
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
    case REGISTER_ACTION_TYPES.POST_REGISTER_START:
      return { ...state, isLoading: true };
    case REGISTER_ACTION_TYPES.POST_REGISTER_SUCCESS:
      return { ...state, isLoading: false };
    case REGISTER_ACTION_TYPES.POST_REGISTER_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};

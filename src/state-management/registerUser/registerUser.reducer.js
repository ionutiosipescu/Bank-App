import { REGISTER_ACTION_TYPES } from "./registerUser.types";

const INITIAL_STATE = {
  userDataObj: {
    userProfile: {
      lastName: "",
      firstName: "",
      email: "",
      city: "",
      number: "",
      displayName: "",
      mobile: "",
      birthDate: "",
      gender: "",
      password: "",
      confirmPassword: "",
      createdAt: "",
    },
    userPlan: [],
  },
};

export const registerReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_ACTION_TYPES.SET_REGISTER_USER:
      return { ...state, RegisterData: { ...payload } };
    default:
      return state;
  }
};

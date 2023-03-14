import { REGISTER_TYPES } from "./register.types";

const INITIAL_STATE = {
  token: "",
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
  emailCode: "",
  registerData: {
    userDetail: {},
    account: [],
  },
  otp: "",
  isSubmitingOtp: false,
  showMessageOtp: false,
  errorMsgOtp: "",
  emailValidate: "",
  otpError: "",
  modalIsOpen: false,
  navigatePage: false,
};

export const registerReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_TYPES.SET_STEP:
      return { ...state, step: payload };
    case REGISTER_TYPES.SET_PLAN_DATA:
      return { ...state, planData: [...payload] };
    case REGISTER_TYPES.SET_USER_DATA:
      return { ...state, userProfile: { ...payload } };
    case REGISTER_TYPES.POST_REGISTER_START:
      return { ...state, isLoading: true };
    case REGISTER_TYPES.POST_REGISTER_SUCCESS:
      return { ...state, isLoading: false };
    case REGISTER_TYPES.POST_REGISTER_FAILED:
      return { ...state, isLoading: false, error: payload };
    case REGISTER_TYPES.GENERATE_EMAIL_CODE:
      return { ...state, emailCode: payload };
    case REGISTER_TYPES.RESET_SIGNUP:
      return INITIAL_STATE;
    case REGISTER_TYPES.SET_TOKEN:
      return { ...state, token: payload };
    case REGISTER_TYPES.SET_REGISTER_ADITIONALS:
      return { ...state, registerData: { ...state.registerData, ...payload } };
    case REGISTER_TYPES.SET_REGISTER_USER:
      return {
        ...state,
        registerData: { ...state.registerData, userDetail: { ...payload } },
      };
    case REGISTER_TYPES.SET_REGISTER_PLAN_ADD:
      return {
        ...state,
        registerData: { ...state.registerData, account: [...payload] },
      };
    case REGISTER_TYPES.SET_EMAIL_VALIDATE:
      return { ...state, emailValidate: payload };
    case REGISTER_TYPES.POST_REGISTER_OTP_START:
      return { ...state, isSubmitingOtp: true };
    case REGISTER_TYPES.POST_REGISTER_OTP_SUCCESS:
      return {
        ...state,
        isSubmitingOtp: false,
        showMessageOtp: true,
        errorMsgOtp: "",
        navigatePage: true,
      };
    case REGISTER_TYPES.POST_REGISTER_OTP_FAILED:
      return {
        ...state,
        isSubmitingOtp: false,
        showMessageOtp: true,
        errorMsgOtp: payload,
      };
    case REGISTER_TYPES.RESET_SHOW_MSG:
      return {
        ...state,
        showMessageOtp: false,
        errorMsgOtp: "",
      };
    case REGISTER_TYPES.SET_OTP_ERROR:
      return { ...state, otpError: payload };
    case REGISTER_TYPES.SET_MODAL_IS_OPEN:
      return { ...state, modalIsOpen: payload };
    case REGISTER_TYPES.SET_OTP:
      return { ...state, otp: payload };
    default:
      return state;
  }
};

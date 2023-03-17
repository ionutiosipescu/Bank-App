import {
  REGISTER_TYPES,
  UserProfile,
  PlanDataObj,
  RegisterData,
  PlanDataArr,
} from "./register.types";
import {
  setStep,
  setTypeOfPlanAdd,
  setRegisterUser,
  setResetSingUp,
  setToken,
  setRegisterObjectAditionals,
  setRegisterUserObject,
  setRegisterPlanAdd,
} from "./register.actions";
import {
  postRegisterStart,
  postRegisterSuccess,
  postRegisterFailed,
} from "./register.service";
import { AnyAction } from "redux";

export type RegisterState = {
  readonly token: string;
  readonly userProfile: UserProfile;
  readonly planData: PlanDataArr;
  readonly step: number;
  readonly isLoading: Boolean;
  readonly error: string;
  readonly emailCode: string;
  readonly registerData: RegisterData;
};

const INITIAL_STATE: RegisterState = {
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
};

export const registerReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): RegisterState => {
  if (setStep.match(action)) {
    return { ...state, step: action.payload };
  }
  if (setTypeOfPlanAdd.match(action)) {
    return { ...state, planData: [...action.payload] };
  }
  if (setRegisterUser.match(action)) {
    return { ...state, userProfile: { ...action.payload } };
  }
  if (setResetSingUp.match(action)) {
    return INITIAL_STATE;
  }
  if (setToken.match(action)) {
    return { ...state, token: action.payload };
  }
  if (setRegisterObjectAditionals.match(action)) {
    return {
      ...state,
      registerData: { ...state.registerData, ...action.payload },
    };
  }
  if (setRegisterUserObject.match(action)) {
    return {
      ...state,
      registerData: {
        ...state.registerData,
        userDetail: { ...action.payload },
      },
    };
  }
  if (setRegisterPlanAdd.match(action)) {
    return {
      ...state,
      registerData: { ...state.registerData, account: [...action.payload] },
    };
  }
  if (postRegisterStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (postRegisterSuccess.match(action)) {
    return { ...state, isLoading: false };
  }
  if (postRegisterFailed.match(action)) {
    return { ...state, isLoading: false, error: action.payload };
  }
  return state;
};

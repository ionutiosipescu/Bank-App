import {
  REGISTER_TYPES,
  UserProfile,
  PlanDataObj,
  PlanDataArr,
  RegisterData,
  RegisterPlanArr,
  RegisterPlanObj,
  RegisterAditionals,
  ClearUserProfile,
} from "./register.types";
import { getLocalDate } from "../../../utils/helpers/helperFunctions/date";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../../utils/helpers/reducer/reducer.utils";
import { Dispatch } from "redux";

export type SetStep = ActionWithPayload<REGISTER_TYPES.SET_STEP, number>;

export type SetTypeOfPlanAdd = ActionWithPayload<
  REGISTER_TYPES.SET_PLAN_DATA,
  PlanDataArr
>;

export type SetRegisterUser = ActionWithPayload<
  REGISTER_TYPES.SET_USER_DATA,
  UserProfile
>;

export type SetResetSingUp = Action<REGISTER_TYPES.RESET_SIGNUP>;

export type SetToken = ActionWithPayload<REGISTER_TYPES.SET_TOKEN, string>;

export type SetRegisterObjectAditionals = ActionWithPayload<
  REGISTER_TYPES.SET_REGISTER_ADITIONALS,
  RegisterAditionals
>;

export type SetRegisterUserObject = ActionWithPayload<
  REGISTER_TYPES.SET_REGISTER_USER,
  ClearUserProfile
>;

export type SetRegisterPlanAdd = ActionWithPayload<
  REGISTER_TYPES.SET_REGISTER_PLAN_ADD,
  RegisterPlanArr
>;

//////////////////////////////////////////////

// ^Update SetStep
export const setStep = withMatcher((step: number): SetStep => {
  return createAction(REGISTER_TYPES.SET_STEP, step);
});

// ^Update OnChange -> Plan Form (typeOfPlan)
export const setTypeOfPlanAddHandler = (
  prevPlans: PlanDataArr,
  index: number,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const newPlans = [...prevPlans];
  newPlans[index].typeOfPlan = e.target.value;
  return setTypeOfPlanAdd(newPlans);
};

export const setTypeOfPlanAdd = withMatcher(
  (newPlans: PlanDataArr): SetTypeOfPlanAdd => {
    return createAction(REGISTER_TYPES.SET_PLAN_DATA, newPlans);
  }
);

// ^Update OnChange -> Register Form
const updateRegisterUser = (
  register: UserProfile,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const { name, value } = e.target;
  return { ...register, [name]: value };
};

export const setRegisterUserHandler = (
  register: UserProfile,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const user = updateRegisterUser(register, e);
  return setRegisterUser(user);
};

// ^Update OnChange -> Register Form
export const setRegisterUser = withMatcher(
  (user: UserProfile): SetRegisterUser => {
    return createAction(REGISTER_TYPES.SET_USER_DATA, user);
  }
);

// ^Reset SignUp Forms
export const setResetSingUp = withMatcher((): SetResetSingUp => {
  return createAction(REGISTER_TYPES.RESET_SIGNUP);
});

// ^Update JWT Token
export const setToken = withMatcher((token: string): SetToken => {
  return createAction(REGISTER_TYPES.SET_TOKEN, token);
});

// ^ Register Aditionals
export const setRegisterObjectAditionalsHandler = (
  registerAditionals: UserProfile
) => {
  const { displayName, password, email } = registerAditionals;
  const cleanAditionals = {
    username: displayName,
    password: password,
    email: email,
  };
  return setRegisterObjectAditionals(cleanAditionals);
};

export const setRegisterObjectAditionals = withMatcher(
  (cleanAditionals: RegisterAditionals): SetRegisterObjectAditionals => {
    return createAction(
      REGISTER_TYPES.SET_REGISTER_ADITIONALS,
      cleanAditionals
    );
  }
);

// ^ Register UserProfile
export const setRegisterUserObjectHandler = (register: UserProfile) => {
  const {
    firstname,
    lastname,
    date,
    country,
    address,
    gender,
    mobile,
    confirmPassword,
  } = register;
  const formattedDate = getLocalDate();

  const cleanProfile = {
    first_name: firstname,
    last_name: lastname,
    birthday: date,
    country: country,
    address: address,
    gender: gender,
    mobile: mobile,
    confirmPassword: confirmPassword,
    created_at: formattedDate,
  };
  return setRegisterUserObject(cleanProfile);
};

export const setRegisterUserObject = withMatcher(
  (cleanProfile: ClearUserProfile): SetRegisterUserObject => {
    return createAction(REGISTER_TYPES.SET_REGISTER_USER, cleanProfile);
  }
);

// ^UserPlan

// ^User Plan Add

export const setRegisterPlanAddHandler = (
  userDataArrPlan: RegisterPlanArr,
  prevPlans: PlanDataArr,
  index: number
) => {
  const { typeOfPlan, currency, currentBallance } = prevPlans[index];
  const formattedDate = getLocalDate();

  const cleanPlan = {
    type_of_plan: typeOfPlan,
    currency: currency,
    created_at: formattedDate,
  };
  const newArrPlan = [...userDataArrPlan, { ...cleanPlan }];
  return setRegisterPlanAdd(newArrPlan);
};

export const setRegisterPlanAdd = withMatcher(
  (newArrPlan: RegisterPlanArr): SetRegisterPlanAdd => {
    return createAction(REGISTER_TYPES.SET_REGISTER_PLAN_ADD, newArrPlan);
  }
);

// ^Async User Plan
export const updateRegisterPlanAsync = (
  userDataArrPlan: RegisterPlanArr,
  prevPlans: PlanDataArr,
  index: number,
  e: React.ChangeEvent<HTMLInputElement>
): any => {
  return async (dispatch: Dispatch) => {
    const indicator = prevPlans[index].currency;
    const validator = userDataArrPlan.some((el) => el.currency === indicator);

    if (validator) {
      const newUserDataArrPlan = await [...userDataArrPlan].filter(
        (prevArrPlan) => prevArrPlan.currency !== prevPlans[index].currency
      );
      // update typeOfPlan in registerPlanData in register.reducer
      await dispatch(setTypeOfPlanAddHandler(prevPlans, index, e));
      // update UserPlan in Redux with currentPlan from registerPlanData
      await dispatch(
        setRegisterPlanAddHandler(newUserDataArrPlan, prevPlans, index)
      );
    } else {
      // update typeOfPlan in registerPlanData in register.reducer
      await dispatch(setTypeOfPlanAddHandler(prevPlans, index, e));
      // update UserPlan in Redux with currentPlan from registerPlanData
      await dispatch(
        setRegisterPlanAddHandler(userDataArrPlan, prevPlans, index)
      );
    }
  };
};

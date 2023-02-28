import { REGISTER_TYPES } from "./register.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { getLocalDate } from "../../../utils/helpers/helperFunctions/date";

// Update SetStep
export const setStep = (step) => {
  return createAction(REGISTER_TYPES.SET_STEP, step);
};

// Update OnChange -> Plan Form (typeOfPlan)
export const setTypeOfPlanAdd = (prevPlans, index, e) => {
  const newPlans = [...prevPlans];
  newPlans[index].typeOfPlan = e.target.value;
  return createAction(REGISTER_TYPES.SET_PLAN_DATA, newPlans);
};

// Update OnChange -> Register Form
const updateRegisterUser = (register, e) => {
  const { name, value } = e.target;
  return { ...register, [name]: value };
};

// Update OnChange -> Register Form
export const setRegisterUser = (register, e) => {
  const user = updateRegisterUser(register, e);
  return createAction(REGISTER_TYPES.SET_USER_DATA, user);
};

// Reset SignUp Forms
export const setResetSingUp = () => {
  return createAction(REGISTER_TYPES.RESET_SIGNUP);
};

// Update JWT Token
export const setToken = (token) => {
  return createAction(REGISTER_TYPES.SET_TOKEN, token);
};

export const setRegisterObjectAditionals = (registerAditionals) => {
  const { displayName, password, email } = registerAditionals;
  const cleanAditionals = {
    username: displayName,
    password: password,
    email: email,
  };
  return createAction(REGISTER_TYPES.SET_REGISTER_ADITIONALS, cleanAditionals);
};

export const setRegisterUserObject = (register) => {
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
  return createAction(REGISTER_TYPES.SET_REGISTER_USER, cleanProfile);
};

// UserPlan

// User Plan Add

const setRegisterPlanAdd = (userDataArrPlan, prevPlans, index) => {
  const { typeOfPlan, currency, currentBallance } = prevPlans[index];
  const formattedDate = getLocalDate();

  const cleanPlan = {
    type_of_plan: typeOfPlan,
    currency: currency,
    // balance: currentBallance,
    // savings: "",
    created_at: formattedDate,
  };
  const newArrPlan = [...userDataArrPlan, { ...cleanPlan }];
  return createAction(REGISTER_TYPES.SET_REGISTER_PLAN_ADD, newArrPlan);
};

// Async User Plan
export const updateRegisterPlanAsync = (
  userDataArrPlan,
  prevPlans,
  index,
  e
) => {
  return async (dispatch) => {
    const indicator = prevPlans[index].currency;
    const validator = userDataArrPlan.some((el) => el.currency === indicator);

    if (validator) {
      const newUserDataArrPlan = await [...userDataArrPlan].filter(
        (prevArrPlan) => prevArrPlan.currency !== prevPlans[index].currency
      );
      // update typeOfPlan in registerPlanData in register.reducer
      await dispatch(setTypeOfPlanAdd(prevPlans, index, e));
      // update UserPlan in Redux with currentPlan from registerPlanData
      await dispatch(setRegisterPlanAdd(newUserDataArrPlan, prevPlans, index));
    } else {
      // update typeOfPlan in registerPlanData in register.reducer
      await dispatch(setTypeOfPlanAdd(prevPlans, index, e));
      // update UserPlan in Redux with currentPlan from registerPlanData
      await dispatch(setRegisterPlanAdd(userDataArrPlan, prevPlans, index));
    }
  };
};

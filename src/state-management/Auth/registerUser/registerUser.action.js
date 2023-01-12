import { REGISTER_ACTION_TYPES } from "./registerUser.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { setTypeOfPlanAdd } from "../registerhelper/registerhelper.actions";
import { setStep } from "../registerhelper/registerhelper.actions";
import axios from "axios";
import { getLocalDate } from "../../../utils/helpers/helperFunctions/date";

export const setRegisterObjectAditionals = (registerHelperAditionals) => {
  const { displayName, password, email } = registerHelperAditionals;
  const cleanAditionals = {
    username: displayName,
    password: password,
    email: email,
  };
  return createAction(
    REGISTER_ACTION_TYPES.SET_REGISTER_ADITIONALS,
    cleanAditionals
  );
};

export const setRegisterUserObject = (registerHelper) => {
  const {
    firstname,
    lastname,
    date,
    country,
    address,
    gender,
    mobile,
    confirmPassword,
  } = registerHelper;
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
  return createAction(REGISTER_ACTION_TYPES.SET_REGISTER_USER, cleanProfile);
};

// Async User Profile
// export const fetchRegisterData = (url, registerData, step) => {
//   return async (dispatch) => {
//     try {
//       axios.post(url, registerData).then((res) => console.log(res.data));
//       dispatch(setStep(step + 1));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// UserPlan

// User Plan Add

const setRegisterPlanAdd = (userDataArrPlan, prevPlans, index) => {
  const { typeOfPlan, currency, currentBallance } = prevPlans[index];
  const formattedDate = getLocalDate();

  const cleanPlan = {
    type_of_plan: typeOfPlan,
    currency: currency,
    balance: currentBallance,
    savings: "",
    created_at: formattedDate,
  };
  const newArrPlan = [...userDataArrPlan, { ...cleanPlan }];
  return createAction(REGISTER_ACTION_TYPES.SET_REGISTER_PLAN_ADD, newArrPlan);
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
      // update typeOfPlan in registerPlanData in registerhelper.reducer
      await dispatch(setTypeOfPlanAdd(prevPlans, index, e));
      // update UserPlan in Redux with currentPlan from registerPlanData
      await dispatch(setRegisterPlanAdd(newUserDataArrPlan, prevPlans, index));
    } else {
      // update typeOfPlan in registerPlanData in registerhelper.reducer
      await dispatch(setTypeOfPlanAdd(prevPlans, index, e));
      // update UserPlan in Redux with currentPlan from registerPlanData
      await dispatch(setRegisterPlanAdd(userDataArrPlan, prevPlans, index));
    }
  };
};

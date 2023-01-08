import { REGISTER_ACTION_TYPES } from "./registerUser.types";
import { createAction } from "../../utils/helpers/reducer/reducer.utils";
import { setObjectPlan } from "../registerhelper/registerhelper.actions";
import { useState } from "react";
import { setTypeOfPlan } from "../registerhelper/registerhelper.actions";
import { setShowPlans } from "../registerhelper/registerhelper.actions";
import { setTypeOfPlanAdd } from "../registerhelper/registerhelper.actions";
import { setTypeOfPlanRemove } from "../registerhelper/registerhelper.actions";
import { test } from "../../utils/services/registerRequestPost";
import { setStep } from "../registerhelper/registerhelper.actions";
import axios from "axios";
// User Profile
// const updateRegisterUser = (register, e) => {
//   const { name, value } = e.target;
//   return { ...register, [name]: value };
// };

// export const setRegisterUser = (register, e) => {
//   const user = updateRegisterUser(register, e);
//   return createAction(REGISTER_ACTION_TYPES.SET_REGISTER_USER, user);
// };
export const setRegisterObjectEsentials = (registerHelperEsentials) => {
  const { displayName, password, email } = registerHelperEsentials;
  const cleanEsentials = {
    username: displayName,
    password: password,
    email: email,
  };
  return createAction(
    REGISTER_ACTION_TYPES.SET_REGISTER_ESENTIALS,
    cleanEsentials
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
  // const options = {
  //   year: "numeric",
  //   month: "2-digit",
  //   day: "2-digit",
  //   timeZone: "UTC",
  // };
  // const createdAt = new Date();
  // const formattedDate = createdAt
  //   .toLocaleDateString("en-US", options)
  //   .replace(/\//g, "-");
  // const createdAt = new Date().toLocaleDateString();
  const createdAt = new Date();

  const year = createdAt.toLocaleString("default", { year: "numeric" });
  const month = createdAt.toLocaleString("default", { month: "2-digit" });
  const day = createdAt.toLocaleString("default", { day: "2-digit" });

  const formattedDate = year + "-" + month + "-" + day;

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
export const fetchRegisterData = (url, registerData) => {
  return async (dispatch) => {
    try {
      axios.post(url, registerData).then((res) => console.log(res.data));
      // console.log(url, registerData);
      // dispatch(setStep(step + 1));
    } catch (error) {
      console.log(error);
    }
  };
};

// UserPlan

// User Plan Add

export const setRegisterPlanAdd = (userDataArrPlan, prevPlans, index) => {
  const { typeOfPlan, currency, currentBallance } = prevPlans[index];
  // const options = {
  //   day: "2-digit",
  //   month: "2-digit",
  //   year: "numeric",
  //   timeZone: "UTC",
  // };
  // const createdAt = new Date();
  // const formattedDate = createdAt
  //   .toLocaleDateString("en-US", options)
  //   .replace(/\//g, "-");
  // const createdAt = new Date().toLocaleDateString();
  const createdAt = new Date();

  const year = createdAt.toLocaleString("default", { year: "numeric" });
  const month = createdAt.toLocaleString("default", { month: "2-digit" });
  const day = createdAt.toLocaleString("default", { day: "2-digit" });

  const formattedDate = year + "-" + month + "-" + day;

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

// User Plan Remove

export const setRegisterPlanRemove = (userDataArrPlan, prevPlans, index) => {
  const newArrPlan = [...userDataArrPlan].filter(
    (prevArrPlan) => prevArrPlan.currency !== prevPlans[index].currency
  );
  return createAction(
    REGISTER_ACTION_TYPES.SET_REGISTER_PLAN_REMOVE,
    newArrPlan
  );
};

// Async Radio Plan
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

// Async Checkbox Plan
export const updateRegisterPlanCheckboxAsync = (
  userDataArrPlan,
  prevPlans,
  index
) => {
  return async (dispatch) => {
    // update showPlans in registerPlanData
    dispatch(setShowPlans(prevPlans, index));
    if (prevPlans[index].showPlans) return;
    if (!prevPlans[index].showPlans) {
      // update typeOfPlan in registerPlanData
      dispatch(setTypeOfPlanRemove(prevPlans, index));
      // update UserPlan in Redux with currentPlan from registerPlanData
      dispatch(setRegisterPlanRemove(userDataArrPlan, prevPlans, index));
    }
  };
};

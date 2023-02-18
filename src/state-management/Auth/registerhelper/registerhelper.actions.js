import { REGISTER_HELPER_TYPES } from "./registerhelper.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { v4 as uuidv4 } from "uuid";
import emailjs from "emailjs-com";

emailjs.init("TTQciWtW0pAxZ3twm"); // init emailjs with your user_id

// SetStep
export const setStep = (step) => {
  return createAction(REGISTER_HELPER_TYPES.SET_STEP, step);
};

// Set planData -> typeOfPlan
export const setTypeOfPlanAdd = (prevPlans, index, e) => {
  const newPlans = [...prevPlans];
  newPlans[index].typeOfPlan = e.target.value;
  return createAction(REGISTER_HELPER_TYPES.SET_PLAN_DATA, newPlans);
};

// Set userProfile
const updateRegisterUser = (register, e) => {
  const { name, value } = e.target;
  return { ...register, [name]: value };
};

export const setRegisterUser = (register, e) => {
  const user = updateRegisterUser(register, e);
  return createAction(REGISTER_HELPER_TYPES.SET_USER_DATA, user);
};

// Async Email Verification
export const fetchEmailVerification = async () => {
  // Send email with code
  const code = "1234";
  try {
    const templateParams = {
      to_email: "ionutiosipescu@yahoo.com",
      code: code,
    };
    await emailjs.send("service_kv4b3bv", "template_g64134p", templateParams);
    // setMessage(
    //   "An email with the code has been sent to your address. Please check your inbox."
    // );
  } catch (error) {
    console.error(error);
  }
};

export const setResetSingUp = () => {
  const registerUserData = {
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
  };
  return createAction(REGISTER_HELPER_TYPES.RESET_SIGNUP, registerUserData);
};

export const setToken = (token) => {
  return createAction(REGISTER_HELPER_TYPES.SET_TOKEN, token);
};

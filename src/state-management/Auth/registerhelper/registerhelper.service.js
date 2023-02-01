import axios from "axios";
import { REGISTER_HELPER_TYPES } from "./registerhelper.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { setStep } from "./registerhelper.actions";
import { v4 as uuidv4 } from "uuid";
import emailjs from "emailjs-com";
import { fetchEmailVerification } from "./registerhelper.actions";
import { createAuthUserWithEmailAndPassword } from "../../../utils/firebase/firebase";
import { sendEmailVerification } from "firebase/auth";

const email = "ionutiosipescu@yahoo.com";
const password = "Texas@123";
export const signup = async () => {
  try {
    const { user } = await createAuthUserWithEmailAndPassword(email, password);
    sendEmailVerification(user);
  } catch (err) {
    console.log(err);
  }
};

export const postRegisterStart = () =>
  createAction(REGISTER_HELPER_TYPES.POST_REGISTER_START);

export const postRegisterSuccess = () =>
  createAction(REGISTER_HELPER_TYPES.POST_REGISTER_SUCCESS);

export const postRegisterFailed = (error) =>
  createAction(REGISTER_HELPER_TYPES.POST_REGISTER_FAILED, error);

export const generateEmailCode = () => {
  const code = uuidv4();
  return createAction(REGISTER_HELPER_TYPES.GENERATE_EMAIL_CODE, code);
};

// Async User Profile
export const fetchRegisterData = (url, registerData, step) => {
  return async (dispatch) => {
    dispatch(postRegisterStart());
    try {
      // Post Request
      const response = await axios.post(url, registerData);
      //   Guard Clouse
      if (!response.data) return;
      await signup();
      // Generate Email Verification Code
      // await dispatch(generateEmailCode());
      // Send Email
      // await fetchEmailVerification();
      //   Increment Page
      await dispatch(setStep(step + 1));
      //   Update Status Request after 2 seconds
      dispatch(postRegisterSuccess());
    } catch (error) {
      if (!error) return;
      const errMsg = error?.response?.data?.message;
      //   If error response from Backend exist, then set the error
      if (errMsg) {
        dispatch(postRegisterFailed(errMsg));
      } else {
        // If error response from Backend doesnt exist, set errServer
        const errServer =
          "Server is currently unavailable please try again later";
        dispatch(postRegisterFailed(errServer));
      }
    }
  };
};

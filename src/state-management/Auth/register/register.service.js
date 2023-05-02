import axios from "axios";
import { REGISTER_TYPES } from "./register.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { setStep } from "./register.actions";
import { requests, loginComplete } from "../../../utils/requests/requests";
import { setResetFormLogInOtp } from "./register.actions";
import { setEmailValidate } from "./register.actions";

export const postRegisterStart = () =>
  createAction(REGISTER_TYPES.POST_REGISTER_START);

export const postRegisterSuccess = () =>
  createAction(REGISTER_TYPES.POST_REGISTER_SUCCESS);

export const postRegisterFailed = (error) =>
  createAction(REGISTER_TYPES.POST_REGISTER_FAILED, error);

// Async User Profile
export const fetchRegisterMail = (registerData, step, csrf) => {
  return async (dispatch) => {
    const { email } = registerData;
    try {
      dispatch(postRegisterStart());
      await dispatch(setStep(step + 1));
      // Post Request
      const response = await axios.post(
        `${requests.POST_SEND_OTP_REGISTER}`,
        registerData,
        {
          headers: {
            "X-XSRF-TOKEN": csrf,
          },
        }
      );
      await dispatch(setEmailValidate(email));
      //   Guard Clouse
      if (!response.data) return;
      //   Increment Page
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

// OTP
export const requestRegisterOtpStart = () =>
  createAction(REGISTER_TYPES.POST_REGISTER_OTP_START);

export const requestRegisterOtpSuccess = () =>
  createAction(REGISTER_TYPES.POST_REGISTER_OTP_SUCCESS);

export const requestRegisterOtpFailed = (error) =>
  createAction(REGISTER_TYPES.POST_REGISTER_OTP_FAILED, error);

export const VerifyOtp = (otp, email, csrf) => {
  return async (dispatch) => {
    try {
      await dispatch(requestRegisterOtpStart());
      await axios
        .post(
          `${requests.POST_VERIFY_OTP}${otp}${loginComplete.EMAIL}${email}`,
          {
            headers: {
              "X-XSRF-TOKEN": csrf,
            },
          }
        )
        .then((res) => console.log(res));
      await dispatch(requestRegisterOtpSuccess());
      await dispatch(setResetFormLogInOtp());
    } catch (err) {
      if (!err) return;
      console.log(err);
      const errMsg = err?.response?.data;
      const errServer =
        "Server is currently unavailable please try again later";
      if (errMsg) {
        dispatch(requestRegisterOtpFailed(errMsg));
      } else {
        dispatch(requestRegisterOtpFailed(errServer));
      }
    }
  };
};

export const ResendOtp = (email, csrf) => {
  return async (dispatch) => {
    try {
      await dispatch(requestRegisterOtpStart());
      await axios
        .post(`${requests.POST_RESEND_OTP}${email}`, {
          headers: {
            "X-XSRF-TOKEN": csrf,
          },
        })
        .then((res) => console.log(res));
      await dispatch(requestRegisterOtpSuccess());
    } catch (err) {
      console.log(err);
      const errMsg = err?.response?.data;
      const errServer =
        "Server is currently unavailable please try again later";
      if (errMsg) {
        dispatch(requestRegisterOtpFailed(errMsg));
      } else {
        dispatch(requestRegisterOtpFailed(errServer));
      }
    }
  };
};

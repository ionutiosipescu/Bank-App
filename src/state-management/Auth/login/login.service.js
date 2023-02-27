import axios from "axios";
import { setCurrentUser } from "../../Dashboard/userData/userData.action";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { LOGIN_ACTION_TYPES } from "./login.types";
import { setToken } from "../register/register.actions";
import { controlMoldalAsync, setEmailValidate } from "./login.action";
import { requests, loginComplete } from "../../../utils/requests/requests";
import { getTransferArr } from "../../Dashboard/services/transfer/transfer.service";

export const postLoginStart = () =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_START);

export const postLoginSuccess = () =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_SUCCESS);

export const postLoginFailed = (error) =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_FAILED, error);

export const fetchAuthData = (registerData) => {
  return async (dispatch) => {
    const {
      data: { active, type, token, id, email },
    } = await axios.post(`${requests.POST_AUTHENTICATE_USER}`, registerData);
    await dispatch(setEmailValidate(email));
    console.log(active, type, token, id, email);
    if (active) {
      await dispatch(setToken(`${type} ${token}`));
      await dispatch(postLoginStart());
      const { data } = await axios.post(
        `${requests.POST_USER_DATA}${id}`,
        {},
        {
          headers: {
            Authorization: `${type} ${token}`,
          },
        }
      );
      console.log(data);
      if (!data) return;
      await dispatch(setCurrentUser(data));
      await dispatch(postLoginSuccess());
    } else {
      await dispatch(controlMoldalAsync(true));
    }
  };
};

// Async User Login
export const fetchLoginData = (registerData) => {
  return async (dispatch) => {
    try {
      await dispatch(fetchAuthData(registerData));
    } catch (error) {
      console.log(error);
      if (!error) return;
      const errMsg = error?.response?.data;
      //   If error response from Backend exist, then set the error
      if (errMsg) {
        dispatch(postLoginFailed(errMsg));
      } else {
        // If error response from Backend doesnt exist, set errServer
        const errServer =
          "Server is currently unavailable please try again later";
        dispatch(postLoginFailed(errServer));
      }
    }
  };
};

export const VerifyOtp = (otp, registerData, email) => {
  return async (dispatch) => {
    try {
      await axios
        .post(`${requests.POST_VERIFY_OTP}${otp}${loginComplete.EMAIL}${email}`)
        .then((res) => console.log(res));
      await dispatch(fetchAuthData(registerData));
    } catch (err) {
      console.log(err);
    }
  };
};

export const ResendOtp = (email) => {
  return async (dispatch) => {
    try {
      await axios.post(`${requests.POST_RESEND_OTP}${email}`);
    } catch (err) {
      console.log(err);
    }
  };
};

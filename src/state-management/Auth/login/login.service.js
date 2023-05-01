import axios from "axios";
import { setCurrentUser } from "../../Dashboard/userData/userData.action";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { LOGIN_ACTION_TYPES } from "./login.types";
import { setToken } from "../register/register.actions";
import { controlMoldalAsync, setEmailValidate } from "./login.action";
import { requests, loginComplete } from "../../../utils/requests/requests";
import { getTransferArr } from "../../Dashboard/services/transfer/transfer.service";
import { setResetFormLogInOtp, setCSRF } from "./login.action";

// Login
export const postLoginStart = () =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_START);

export const postLoginSuccess = () =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_SUCCESS);

export const postLoginFailed = (error) =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_FAILED, error);

// OTP
export const requestLogInOtpStart = () =>
  createAction(LOGIN_ACTION_TYPES.REQUEST_LOGIN_OTP_START);

export const requestLogInOtpSuccess = () =>
  createAction(LOGIN_ACTION_TYPES.REQUEST_LOGIN_OTP_SUCCESS);

export const requestLogInOtpFailed = (error) =>
  createAction(LOGIN_ACTION_TYPES.REQUEST_LOGIN_OTP_FAILED, error);

// export const getCSRF = () => {
//   return async (dispatch) => {
//     axios.defaults.withCredentials = true;
//     const { data } = await axios.get(`${requests.GET_GENERATE_CSRF}`);
//     await dispatch(setCSRF(data));
//     console.log(data);
//   };
// };

export const fetchAuthData = (registerData, csrf) => {
  return async (dispatch) => {
    console.log(registerData, csrf);
    const {
      data: { active, type, token, id, email },
    } = await axios.post(
      `${requests.POST_AUTHENTICATE_USER}`,
      registerData
      // , {
      //   headers: {
      //     "X-CSRF-TOKEN": csrf,
      //   },
      // }
    );
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
export const fetchLoginData = (registerData, csrf) => {
  return async (dispatch) => {
    try {
      await dispatch(fetchAuthData(registerData, csrf));
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
      await dispatch(requestLogInOtpStart());
      await axios
        .post(`${requests.POST_VERIFY_OTP}${otp}${loginComplete.EMAIL}${email}`)
        .then((res) => console.log(res));
      await dispatch(fetchAuthData(registerData));
      await dispatch(requestLogInOtpSuccess());
      await dispatch(setResetFormLogInOtp());
    } catch (err) {
      if (!err) return;
      console.log(err);
      const errMsg = err?.response?.data;
      const errServer =
        "Server is currently unavailable please try again later";
      if (errMsg) {
        dispatch(requestLogInOtpFailed(errMsg));
      } else {
        dispatch(requestLogInOtpFailed(errServer));
      }
    }
  };
};

export const ResendOtp = (email) => {
  return async (dispatch) => {
    try {
      await dispatch(requestLogInOtpStart());
      await axios
        .post(`${requests.POST_RESEND_OTP}${email}`)
        .then((res) => console.log(res));
      await dispatch(requestLogInOtpSuccess());
    } catch (err) {
      console.log(err);
      const errMsg = err?.response?.data;
      const errServer =
        "Server is currently unavailable please try again later";
      if (errMsg) {
        dispatch(requestLogInOtpFailed(errMsg));
      } else {
        dispatch(requestLogInOtpFailed(errServer));
      }
    }
  };
};

// // Exemplu de request POST în care se adaugă header-ul CSRF Token din cookie
// const postData = async () => {
//   addCsrfHeader();
//   try {
//     const response = await axios.post('/api/endpoint', { data: 'some data' });
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };

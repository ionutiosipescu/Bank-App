import axios from "axios";
import { setCurrentUser } from "../../Dashboard/userData/userData.action";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { LOGIN_ACTION_TYPES } from "./loginUser.types";
import { setToken } from "../registerhelper/registerhelper.actions";
import { controlMoldalAsync } from "./loginUser.action";

export const postLoginStart = () =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_START);

export const postLoginSuccess = () =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_SUCCESS);

export const postLoginFailed = (error) =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_FAILED, error);

// Async User Login
export const fetchLoginData = (registerData) => {
  return async (dispatch) => {
    try {
      // first request - validate if credentials are corect and a user exist
      // response should be status of account: active or notActive
      const {
        data: { active, type, token, id },
      } = await axios.post(
        "http://localhost:8080/bank/auth/signin",
        registerData
      );
      console.log(active, type, token, id);
      // aici va veni in plus fata de ce vine acum un status al contului
      if (active) {
        await dispatch(setToken(`${type} ${token}`));
        await dispatch(postLoginStart());
        const { data } = await axios.post(
          `http://localhost:8080/user/${id}`,
          {},
          {
            headers: {
              Authorization: `${type} ${token}`,
            },
          }
        );
        if (!data) return;
        await dispatch(setCurrentUser(data));
        await dispatch(postLoginSuccess());
      } else {
        await dispatch(controlMoldalAsync(true));
      }
    } catch (error) {
      if (!error) return;
      const errMsg = error?.response?.data?.message;
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

export const VerifyOtp = (otp, registerData) => {
  return async (dispatch) => {
    const email = "ionutiosipescu2000@gmail.com";
    try {
      await axios
        .post(
          `http://localhost:8080/bank/auth/validate?otpnum=${otp}&email=${email}`
        )
        .then((res) => console.log(res));
      const {
        data: { active, type, token, id },
      } = await axios.post(
        "http://localhost:8080/bank/auth/signin",
        registerData
      );
      console.log(active, type, token, id);
      if (active) {
        await dispatch(setToken(`${type} ${token}`));
        await dispatch(postLoginStart());
        const { data } = await axios.post(
          `http://localhost:8080/user/${id}`,
          {},
          {
            headers: {
              Authorization: `${type} ${token}`,
            },
          }
        );
        if (!data) return;
        await dispatch(setCurrentUser(data));
        await dispatch(postLoginSuccess());
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const ResendOtp = () => {
  return async (dispatch) => {
    const email = "ionutiosipescu2000@gmail.com";
    try {
      await axios.post(
        `http://localhost:8080/bank/auth/resend/otp?email=${email}`
      );
    } catch (err) {
      console.log(err);
    }
  };
};

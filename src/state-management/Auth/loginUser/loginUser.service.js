import axios from "axios";
import { setCurrentUser } from "../../Dashboard/userData/userData.action";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { LOGIN_ACTION_TYPES } from "./loginUser.types";
import { setToken } from "../registerhelper/registerhelper.actions";

export const postLoginStart = () =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_START);

export const postLoginSuccess = () =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_SUCCESS);

export const postLoginFailed = (error) =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_FAILED, error);

// Async User Login
export const fetchLoginData = (url, registerData) => {
  return async (dispatch) => {
    console.log(registerData);
    try {
      // First request: login
      const {
        data: { tokenType, accessToken, id },
      } = await axios.post(url, registerData);
      console.log(tokenType, accessToken, id);
      await dispatch(setToken(`${tokenType} ${accessToken}`));
      await dispatch(postLoginStart());
      // Use the token type and access token in the second request
      const { data } = await axios.post(
        `http://localhost:8080/user/${id}`,
        {},
        {
          headers: {
            Authorization: `${tokenType} ${accessToken}`,
          },
        }
      );
      if (!data) return;
      console.log(data);
      await dispatch(setCurrentUser(data));
      await dispatch(postLoginSuccess());
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

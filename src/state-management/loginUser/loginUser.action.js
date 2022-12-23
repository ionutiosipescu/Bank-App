import { LOGIN_ACTION_TYPES } from "./loginUser.types";
import { createAction } from "../../utils/helpers/reducer/reducer.utils";

const updateLoginUser = (loginData, e) => {
  const { name, value } = e.target;
  return { ...loginData, [name]: value };
};

export const setLogInUser = (loginData, e) => {
  const loginUserData = updateLoginUser(loginData, e);
  return createAction(LOGIN_ACTION_TYPES.SET_LOGIN_USER, loginUserData);
};

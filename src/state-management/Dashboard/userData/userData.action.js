import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { USER_DATA_TYPES } from "./userData.types";

// Set Current User
export const setCurrentUser = (userData) => {
  return createAction(USER_DATA_TYPES.SET_CURRENT_USER, userData);
};

const updateAuthForm = (authData, e) => {
  const { name, value } = e.target;
  return { ...authData, [name]: value };
};

// Update Auth Form
export const setAuthForm = (authData, e) => {
  const authObj = updateAuthForm(authData, e);
  return createAction(USER_DATA_TYPES.SET_AUTH, authObj);
};

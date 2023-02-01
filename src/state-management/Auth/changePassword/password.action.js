import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { CHANGE_PASSWORD_TYPES } from "./password.types";

const updateChangePassword = (password, e) => {
  const { name, value } = e.target;
  return { ...password, [name]: value };
};

export const setChangePassword = (password, e) => {
  const updateObj = updateChangePassword(password, e);
  return createAction(CHANGE_PASSWORD_TYPES.SET_PASSWORD, updateObj);
};

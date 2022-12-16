import { REGISTER_ACTION_TYPES } from "./registerUser.types";
import { createAction } from "../../utils/helpers/reducer/reducer.utils";

export const setRegisterUser = (user) => {
  return createAction(REGISTER_ACTION_TYPES.SET_REGISTER_USER, user);
};

import { REGISTER_ACTION_TYPES } from "./registerUser.types";
import { createAction } from "../../utils/helpers/reducer/reducer.utils";

const updateRegisterUser = (register, e) => {
  const { name, value } = e.target;
  return { ...register, [name]: value };
};

export const setRegisterUser = (register, e) => {
  const user = updateRegisterUser(register, e);
  return createAction(REGISTER_ACTION_TYPES.SET_REGISTER_USER, user);
};

import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { USER_DATA_TYPES } from "./userData.types";

export const setCurrentUser = (userData) => {
  return createAction(USER_DATA_TYPES.SET_CURRENT_USER, userData);
};
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../../utils/helpers/reducer/reducer.utils";
import { USER_DATA_TYPES } from "./userData.types";
import { UserData } from "./userData.types";

export type SetCurrentUser = ActionWithPayload<
  USER_DATA_TYPES.SET_CURRENT_USER,
  UserData
>;

export type ResetUser = Action<USER_DATA_TYPES.RESET_USER>;
// Set Current User
export const setCurrentUser = withMatcher(
  (userData: UserData): SetCurrentUser => {
    return createAction(USER_DATA_TYPES.SET_CURRENT_USER, userData);
  }
);

export const resetUser = withMatcher((): ResetUser => {
  return createAction(USER_DATA_TYPES.RESET_USER);
});

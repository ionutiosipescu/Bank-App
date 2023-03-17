import { USER_DATA_TYPES, UserData } from "./userData.types";
import { AnyAction } from "redux";
import { setCurrentUser, resetUser } from "./userData.action";

export type UserDataState = {
  readonly userData: UserData | null;
};

const INITIAL_STATE: UserDataState = {
  userData: null,
};

export const userDataReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): UserDataState => {
  if (setCurrentUser.match(action)) {
    return { ...state, userData: { ...action.payload } };
  }
  if (resetUser.match(action)) {
    return INITIAL_STATE;
  }
  return state;
};

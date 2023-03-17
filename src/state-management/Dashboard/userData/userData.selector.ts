import { UserDataState } from "./userData.reducer";
import { RootState } from "../../store";
import { createSelector } from "reselect";

export const selectUserDataState = (state: RootState): UserDataState =>
  state.currentUser;

export const selectCurrentUser = createSelector(
  selectUserDataState,
  (state) => state.userData
);
export const selectUserAccount = createSelector(
  selectUserDataState,
  (state) => state.userData?.account
);
export const selectUserDetail = createSelector(
  selectUserDataState,
  (state) => state.userData?.userDetail
);

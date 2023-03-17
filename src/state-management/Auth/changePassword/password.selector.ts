import { PasswordState } from "./password.reducer";
import { RootState } from "../../store";
import { createSelector } from "reselect";

export const selectPasswordState = (state: RootState): PasswordState =>
  state.registerChangePassword;

export const selectPassword = createSelector(
  selectPasswordState,
  (state) => state.changePasswordData
);

export const selectAuth = createSelector(
  selectPasswordState,
  (state) => state.auth
);

export const selectShowMessage = createSelector(
  selectPasswordState,
  (state) => state.showMessage
);

export const selectSettingErrorRequest = createSelector(
  selectPasswordState,
  (state) => state.errorMsg
);

export const selectSettingIsSubmiting = createSelector(
  selectPasswordState,
  (state) => state.isSubmiting
);

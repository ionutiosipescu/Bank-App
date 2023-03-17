import { RootState } from "../../store";
import { LogInState } from "./login.reducer";
import { createSelector } from "reselect";

export const selectLoginState = (state: RootState): LogInState => state.login;

export const selectlogin = createSelector(
  selectLoginState,
  (state) => state.LoginData
);

export const selectIsSubmiting = createSelector(
  selectLoginState,
  (state) => state.isSubmiting
);
export const selectErrorMessage = createSelector(
  selectLoginState,
  (state) => state.errorMsg
);
export const selectModalIsOpen = createSelector(
  selectLoginState,
  (state) => state.modalIsOpen
);
export const selectOtp = createSelector(selectLoginState, (state) => state.otp);
export const selectOtpError = createSelector(
  selectLoginState,
  (state) => state.otpError
);
export const selectEmailValidate = createSelector(
  selectLoginState,
  (state) => state.emailValidate
);
export const selectShowMessageOtp = createSelector(
  selectLoginState,
  (state) => state.showMessageOtp
);
export const selectErrorOtp = createSelector(
  selectLoginState,
  (state) => state.errorMsgOtp
);
export const selectIsSubmitingOtp = createSelector(
  selectLoginState,
  (state) => state.isSubmitingOtp
);

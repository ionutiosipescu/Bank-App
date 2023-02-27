export const selectlogin = (state) => state.login.LoginData;

export const selectIsSubmiting = (state) => state.login.isSubmiting;

export const selectErrorMessage = (state) => state.login.errorMsg;

export const selectModalIsOpen = (state) => state.login.modalIsOpen;

export const selectOtp = (state) => state.login.otp;

export const selectOtpError = (state) => state.login.otpError;

export const selectEmailValidate = (state) => state.login.emailValidate;

export const selectShowMessageOtp = (state) => state.login.showMessageOtp;
export const selectErrorOtp = (state) => state.login.errorMsgOtp;
export const selectIsSubmitingOtp = (state) => state.login.isSubmitingOtp;

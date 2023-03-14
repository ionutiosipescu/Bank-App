export const selectStep = (state) => state.register.step;

export const selectPlan = (state) => state.register.planData;

export const selectRegisterUser = (state) => state.register.userProfile;

export const selectPlanObject = (state) => state.register.planData[0];

export const selectRegisterFailed = (state) => state.register.error;

export const selectIsLoading = (state) => state.register.isLoading;

export const selectEmailCode = (state) => state.register.emailCode;
export const selectEmailValidate = (state) => state.register.emailValidate;

export const selectToken = (state) => state.register.token;

export const selectRegisterData = (state) => state.register.registerData;
export const selectRegisterPlan = (state) =>
  state.register.registerData.account;
export const selectRegisterUserFinal = (state) =>
  state.register.registerData.userDetail;

export const selectOtp = (state) => state.register.otp;
export const selectShowMessageOtp = (state) => state.register.showMessageOtp;
export const selectErrorOtp = (state) => state.register.errorMsgOtp;
export const selectIsSubmitingOtp = (state) => state.register.isSubmitingOtp;
export const selectNavigatePage = (state) => state.register.navigatePage;

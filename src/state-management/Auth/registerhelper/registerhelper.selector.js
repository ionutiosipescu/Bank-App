export const selectStep = (state) => state.registerHelper.step;

export const selectPlan = (state) => state.registerHelper.planData;

export const selectPlanObject = (state) => state.registerHelper.planData[0];

export const selectRegisterUser = (state) => state.registerHelper.userProfile;

export const selectRegisterFailed = (state) => state.registerHelper.error;

export const selectIsLoading = (state) => state.registerHelper.isLoading;

export const selectEmailCode = (state) => state.registerHelper.emailCode;

export const selectToken = (state) => state.registerHelper.token;

export const selectRegisterData = (state) => state.registerHelper.registerData;
export const selectRegisterPlan = (state) =>
  state.registerHelper.registerData.account;
export const selectRegisterUserFinal = (state) =>
  state.register.registerData.userDetail;

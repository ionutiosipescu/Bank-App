export const selectStep = (state) => state.registerHelper.step;

export const selectPlan = (state) => state.registerHelper.planData;

export const selectPlanObject = (state) => state.registerHelper.planData[0];

export const selectRegisterUser = (state) => state.registerHelper.userProfile;

export const selectErrorMessage = (state) => state.registerErrors.errorMsg;

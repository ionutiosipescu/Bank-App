export const selectPassword = (state) =>
  state.registerChangePassword.changePasswordData;
export const selectAuth = (state) => state.registerChangePassword.auth;
export const selectShowMessage = (state) =>
  state.registerChangePassword.showMessage;
export const selectSettingErrorRequest = (state) =>
  state.registerChangePassword.errorMsg;
export const selectSettingIsSubmiting = (state) =>
  state.registerChangePassword.isSubmiting;

export const selectSettingsData = (state) => state.settingsState.settingsData;
export const selectAuth = (state) => state.settingsState.auth;
export const selectSettingErrorRequest = (state) =>
  state.settingsState.errorMsg;
export const selectSettingIsSubmiting = (state) =>
  state.settingsState.isSubmiting;
export const selectShowMessage = (state) => state.settingsState.showMessage;

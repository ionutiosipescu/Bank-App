export const selectSettingsData = (state) => state.settingsState.settingsData;

export const selectSettingErrorRequest = (state) =>
  state.settingsState.errorMsg;
export const selectSettingIsSubmiting = (state) =>
  state.settingsState.isSubmiting;
export const selectSettingsShowMessage = (state) =>
  state.settingsState.showMessage;

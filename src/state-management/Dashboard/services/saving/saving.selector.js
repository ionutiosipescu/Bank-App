export const selectSavingAction = (state) => state.savingStorage.savingAction;
export const selectSavingForm = (state) => state.savingStorage.savingObj;
export const selectSavingArr = (state) => state.savingStorage.savingArr;
export const selectSavingData = (state) => state.savingStorage.savingData;
export const selectShowModal = (state) => state.savingStorage.showModal;

export const selectShowMessage = (state) => state.savingStorage.showMessage;
export const selectError = (state) => state.savingStorage.errorMsg;
export const selectIsSubmiting = (state) => state.savingStorage.isSubmiting;

export const selectTransfer = (state) => state.transferStorage;
export const selecttransferStorage = (state) =>
  state.transferStorage.transferObj;
export const selectTransferForm = (state) => state.transferStorage.transferForm;
export const selectTransferArr = (state) => state.transferStorage.transferArr;
export const selectDetailTransfer = (state) =>
  state.transferStorage.detailTransfer;
export const selectOptionTransfer = (state) =>
  state.transferStorage.selectedOption;

export const selectShowMessage = (state) => state.transferStorage.showMessage;
export const selectError = (state) => state.transferStorage.errorMsg;
export const selectIsSubmiting = (state) => state.transferStorage.isSubmiting;
